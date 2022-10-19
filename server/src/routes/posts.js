const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    createNewPost
} = require('../controllers/posts');

router.get('/', getAllPosts);
router.post('/', createNewPost);

module.exports = router;

