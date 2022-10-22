const express = require("express");
const { authorization } = require('../middleware/auth')

const router = express.Router();
const {
    getAllUsers,
    createNewUser,
    deleteUser,
    getUserById
} = require('../controllers/users');

router.get('/', authorization, getAllUsers);
router.post('/register', createNewUser);
router.get('/:id', getUserById);
router.delete('/:id', authorization, deleteUser);

module.exports = router;

