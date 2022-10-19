const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllPosts = () => prisma.post.findMany({});

const createPost = (title, content, id) =>
  prisma.post.create({
    data: {
        title: title,
        content: content,
        userId: id,
    },
  });

module.exports = {
  findAllPosts,
  createPost,
};
