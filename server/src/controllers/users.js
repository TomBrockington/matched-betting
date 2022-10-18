const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashRate = 8

const {
    findUserByEmail,
    createUser,
} = require('../domain/users');


const createNewUser = async (req, res) => {
    const { email, password } = req.body;
    const lowercaseEmail = email.toLowerCase();

    try {

        if (!lowercaseEmail || !password) {
            return res.status(404).json({ error: 'Missing fields in body', code: `404` });
        }

        const foundUser = await findUserByEmail(lowercaseEmail)

        if (foundUser) { 
            return res.status(409).json({ error: 'User already exists', code: `409` });
        }

        const hashedPassword = await bcrypt.hash(password, hashRate);

        const newUser = await createUser(lowercaseEmail, hashedPassword)
        console.log('new user created', newUser);

        return res.status(201).json({ data: newUser, message: `User ${newUser.email} created`, code: `201` });

    } catch (err) { 
        return res.status(500).json({ error: err.message });
    }
}


module.exports = {
    createNewUser,
};
  