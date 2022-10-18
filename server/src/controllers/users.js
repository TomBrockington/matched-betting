const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashRate = 8;

const {
  findAllUsers,
  findUserByEmail,
  createUser,
} = require('../domain/users');

const getAllUsers = async (req, res) => {
  try {
    const foundUsers = await findAllUsers();

    if (!foundUsers) {
      return res.status(404).json({ message: `No users found`, code: `404` });
    }

    return res
      .status(201)
      .json({ data: foundUsers, message: `Returning all users`, code: `201` });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const createNewUser = async (req, res) => {
  const { email, password } = req.body;
  const lowercaseEmail = email.toLowerCase();

  try {
    if (!lowercaseEmail || !password) {
      return res
        .status(404)
        .json({ error: 'Missing fields in body', code: `404` });
    }

    const foundUser = await findUserByEmail(lowercaseEmail);

    if (foundUser) {
      return res
        .status(409)
        .json({ error: 'User already exists', code: `409` });
    }

    const hashedPassword = await bcrypt.hash(password, hashRate);

    const newUser = await createUser(lowercaseEmail, hashedPassword);
    console.log('new user created', newUser);

    return res
      .status(201)
      .json({
        data: newUser,
        message: `User ${newUser.email} created`,
        code: `201`,
      });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
};
