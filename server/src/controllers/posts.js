const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {} = require('../domain/posts');

const getAllPosts = async (req, res) => {
  console.log('getting all posts...');
};

module.exports = {
  getAllPosts,
};
