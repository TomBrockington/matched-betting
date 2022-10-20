const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    createNewPost,
    getPostsByCategory,
    getPostById,
    editPost
} = require('../controllers/posts');
// TODO: im guessing the way to stop these tripping over each other is to combine query into one search function
router.get('/', getPostsByCategory);
router.get('/', getAllPosts);
router.post('/', createNewPost);
router.get('/:id', getPostById);
router.patch('/:id', editPost);

module.exports = router;

