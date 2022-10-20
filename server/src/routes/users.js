const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    createNewUser,
    deleteUser
} = require('../controllers/users');

router.get('/', getAllUsers);
router.post('/register', createNewUser);
router.delete('/:id', deleteUser);

module.exports = router;

