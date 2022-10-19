const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findAllPosts, createPost } = require('../domain/posts');

const getAllPosts = async (req, res) => {
  console.log('getting all posts...');
  try {
    const foundPosts = await findAllPosts();
    console.log('found posts...', foundPosts);

    if (!foundPosts) {
      return res
        .status(404)
        .json({ error: error.message, message: `No posts found` });
    }

    return res.status(200).json({ data: foundPosts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createNewPost = async (req, res) => {
  const { title, content } = req.body;
  const id = 1; // TODO:// req.user;
  const category = 'GENERAL' //TODO:

  console.log('id:', id);
  // user id req.params

  if (!title || !content) {
    return res
      .status(404)
      .json({ error: 'Missing title or content', code: `404` });
  }

  try {
    const newPost = await createPost(title, content, id, category);

    return res
      .status(201)
      .json({
        data: newPost,
        message: `Post: '${newPost.title}' created`,
        code: `201`,
      });

  } catch (error) {

    return res
      .status(500)
      .json({
        error: error.message,
        message: `Internal server error`,
        code: `500`,
      });
  }
};

module.exports = {
  getAllPosts,
  createNewPost,
};
