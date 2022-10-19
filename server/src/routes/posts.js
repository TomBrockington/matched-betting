const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    createNewPost,
    getPostsByCategory,
} = require('../controllers/posts');

router.get('/', getPostsByCategory);
router.get('/', getAllPosts);
router.post('/', createNewPost);

module.exports = router;

