const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    createNewPost,
    getPostsByCategory,
    getPostById,
    editPost,
    deletePost
} = require('../controllers/posts');
// TODO: im guessing the way to stop these tripping over each other is to combine query into one search function
// TODO: combine gets into one
router.get('/', getAllPosts);
router.get('/', getPostsByCategory);
router.post('/', createNewPost);
router.get('/:id', getPostById);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);

module.exports = router;

