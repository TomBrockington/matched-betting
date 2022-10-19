const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    findAllPosts
} = require('../domain/posts');

const getAllPosts = async (req, res) => {
  console.log('getting all posts...');
  try {

    const foundPosts = await findAllPosts()
    console.log('found posts...', foundPosts);

    if (!foundPosts) {
        return res.status(404).json({ error: err.message, message: `No posts found` });

    }

    return res.status(200).json({ data: foundPosts })

  } catch (err) { 
    return res.status(500).json({ error: err.message + ' ' + res.status });

  }
};

module.exports = {
  getAllPosts,
};
