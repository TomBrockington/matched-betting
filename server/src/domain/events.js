const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllSportEvents = () => prisma.sportevent.findMany({
  orderBy: {
    createdAt: 'desc'
  }
});

const findEventByType = (sportType) => prisma.sportevent.findMany({
  where: {
    sportType: sportType
  }
});

module.exports = {
  findAllSportEvents,
  findEventByType,
};
