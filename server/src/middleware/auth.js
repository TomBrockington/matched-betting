const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    findUserByEmail,
  } = require('../domain/users');


const authorization = async (req, res, next) => { 
    // Can pass anything like this down to the get/post requests
        // req.banana = 'YELLOW BANANA'
        const [_, token] = req.get('authorization').split(' ')
      
        try {
      
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      
          const foundUser = await findUserByEmail(decodedToken.email)
      
          req.user = foundUser
      
        } catch (error) {
      
          return res.status(500).json({
            error: error.message,
            message: `Internal server error`,
            code: `500`,
          });
        }

    next()
}

module.exports = {
    authorization
}
