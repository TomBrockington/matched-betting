const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findUserByEmail } = require('../domain/users');

const login = async (req, res) => {
  const { email, password } = req.body;
  const lowercaseEmail = email.toLowerCase();

  if(!email || !password) {
    return res.status(400).json({
      message: 'Invalid email and/or password provided'
    })
  }

  try {

    const existingUser = await findUserByEmail(lowercaseEmail);

    if (!existingUser)
      return res.status(409).json({ error: { message: 'Incorrect login information' } });

    const passwordsMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordsMatch)
      return res.status(409).json({ error: { message: 'Incorrect login information' } });

    const token = createAccessToken(existingUser.id, existingUser.email);

    return res.status(200).json({ data: token, user: existingUser });

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
