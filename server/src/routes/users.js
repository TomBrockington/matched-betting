const express = require("express");
const router = express.Router();
const {
    createNewUser
} = require('../controllers/users');

router.post('/register', createNewUser);

module.exports = router;

