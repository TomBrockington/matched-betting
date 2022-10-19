const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findUserByEmail } = require('../domain/users');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {

    const existingUser = await findUserByEmail(email);

    if (!existingUser)
      return res.status(409).json({ error: { message: 'Incorrect login information' } });

    const passwordsMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordsMatch)
      return res.status(409).json({ error: { message: 'Incorrect login information' } });

    const token = createAccessToken(existingUser.id, existingUser.email);

    res.status(200).json({ data: token });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const createAccessToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

module.exports = {
  login,
};
