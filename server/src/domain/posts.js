const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllPosts = () => prisma.post.findMany({});

const createPost = (title, content, id, category) =>
  prisma.post.create({
    data: {
        title: title,
        content: content,
        userId: id,
        category: category,
    },
  });

module.exports = {
  findAllPosts,
  createPost,
};
