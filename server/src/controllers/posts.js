const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
  findAllPosts,
  createPost,
  findPostsByCategory,
  findPostById,
  editPostContent,
  deletePostById,
} = require('../domain/posts');

const getAllPosts = async (req, res) => {

  try {
    //
    const foundPosts = await findAllPosts();

    if (!foundPosts) {
      return res
        .status(404)
        .json({ error: error.message, message: `No posts found` });
    }

    return res.status(200).json({ 
      message: `Found ${foundPosts.length} posts`, 
      data: foundPosts 
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};

const getPostsByCategory = async (req, res) => {
  console.log('getting posts by category');
  const { category } = req.query;

  if (!category) {
    return res.status(404).json({
      error: 'Missing request query',
      code: `404`,
    });
  }

  try {
    //
    const foundPosts = await findPostsByCategory(category);

    if (!foundPosts) {
      return res
        .status(404)
        .json({ error: `Posts not found or don't exist`, code: `404` });
    }

    return res.status(201).json({
      message: `Posts found for category: ${category}`,
      data: foundPosts,
      code: `201`,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      message: `Internal server error`,
      error: error.message,
      code: `500`,
    });
  }
};

const getPostById = async (req, res) => {
  console.log('getting post by id');
  const id = Number(req.params.id);

  if (!id) {
    return res.status(404).json({ error: `ID missing`, code: `404` });
  }

  try {
    //
    const foundPost = await findPostById(id);

    if (!foundPost) {
      return res.status(404).json({ error: 'Post not found', code: `404` });
    }

    return res.status(201).json({
      message: `Found post ID: ${foundPost.id}`,
      data: foundPost,
      code: `201`,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};

const createNewPost = async (req, res) => {
  const { title, content, category } = req.body;
  const userId = req.user.id;
  const username = req.user.username;

  if (!title || !content || !category) {
    return res.status(201).json({
      message: `Missing content in request`,
      code: `409`,
    });
  }

  try {
    // TODO: make titles not unique
    const newPost = await createPost(
      title,
      content,
      category,
      username,
      userId
    );

    if (!newPost) {
      return res.status(409).json({
        message: `Failed to create post`,
        code: `409`,
      });
    }

    return res.status(201).json({
      message: `Post '${newPost.title}' created successfully`,
      code: `201`,
      data: newPost,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};

const editPost = async (req, res) => {
  const postId = Number(req.params.id);
  const { title, content, category } = req.body;

  if (!postId) {
    return res.status(404).json({ error: `ID missing`, code: `404` });
  }

  try {
    //
    const foundPost = await findPostById(postId);

    if (!foundPost) {
      return res.status(404).json({ error: 'Post not found', code: `404` });
    }

    if (category === '' || category === null || category === undefined) {
      console.log('cat empty');
      category = foundPost.category;
    }

    const editedPost = await editPostContent(postId, title, content, category);

    return res.status(201).json({
      data: editedPost,
      message: `Post ${editedPost.title} updated successfully`,
      code: `201`,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};

const deletePost = async (req, res) => {
  const postId = Number(req.params.id);

  if (!postId) {
    return res.status(404).json({ error: `ID missing`, code: `404` });
  }

  try {
    //
    const foundPost = await findPostById(postId);

    if (!foundPost) {
      return res.status(404).json({ error: 'Post not found', code: `404` });
    }

    const deletedPost = await deletePostById(postId);

    return res.status(201).json({
      data: deletedPost,
      message: `Post '${deletedPost.title}' deleted successfully`,
      code: `201`,
    });
    //
  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }
};



module.exports = {
  getAllPosts,
  createNewPost,
  getPostsByCategory,
  getPostById,
  editPost,
  deletePost,
};
