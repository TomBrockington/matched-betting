const express = require("express");
const { authorization } = require('../middleware/auth')

const router = express.Router();
const {
    getAllUsers,
    createNewUser,
    deleteUser
} = require('../controllers/users');

router.get('/', authorization, getAllUsers);
router.post('/register', createNewUser);
router.delete('/:id', authorization, deleteUser);

module.exports = router;

