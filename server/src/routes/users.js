const express = require("express");
const { authorization } = require('../middleware/auth')

const router = express.Router();
const {
    getAllUsers,
    createNewUser,
    deleteUser,
    updateUserById,
    getUserById
} = require('../controllers/users');

router.get('/', authorization, getAllUsers);
router.post('/register', createNewUser);
router.get('/:id', getUserById);
router.patch('/:id', authorization, updateUserById);
router.delete('/:id', authorization, deleteUser);

module.exports = router;

