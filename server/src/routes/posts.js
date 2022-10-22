const express = require("express");

const { authorization } = require('../middleware/auth')

const router = express.Router();
const {
    getAllPosts,
    getPostsByCategory,
    getPostById,
    editPost,
    deletePost,
    createNewPost
} = require('../controllers/posts');
// TODO: combine gets into one
router.post('/', authorization, createNewPost)
router.get('/', getPostsByCategory);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);

module.exports = router;

