const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllUsers = () => prisma.user.findMany({});

const findUserByEmail = (email) =>
  prisma.user.findFirst({
    where: {
      email: email,
    },
  });

const findUserById = (userId) => prisma.user.findFirst({
  where: {
    id: userId,
  },
  include: {
    profile: true
  }
})

const createUser = (email, password) =>
  prisma.user.create({
    data: {
      email: email,
      password: password,
    },
  });

const updateUser = (userId, username) => prisma.user.update({
  where: {
    id: userId, 
  },
  data: {
    username: username,
  }
})

  const deleteUserById = (userId) => prisma.user.delete({
    where: {
      id: userId,
    }
  })
  
module.exports = {
  findAllUsers,
  findUserByEmail,
  findUserById,
  createUser,
  updateUser,
  deleteUserById
};
