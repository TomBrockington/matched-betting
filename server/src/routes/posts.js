const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    createNewPost,
    getPostsByCategory,
} = require('../controllers/posts');

router.get('/', getAllPosts);
router.post('/', createNewPost);
router.get('/', getPostsByCategory);

module.exports = router;

