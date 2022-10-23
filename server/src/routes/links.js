const express = require("express");
const { authorization } = require('../middleware/auth')

const router = express.Router();
const {
    getAllLinks,

} = require('../controllers/links');

router.get('/', getAllLinks);


module.exports = router;

