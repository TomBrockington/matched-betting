const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllLinks = () =>
  prisma.link.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

module.exports = {
  findAllLinks,
};
