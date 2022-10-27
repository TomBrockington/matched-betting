const express = require('express');
const { authorization } = require('../middleware/auth');

const router = express.Router();
const { getAllSportEvents } = require('../controllers/events');

router.get('/', getAllSportEvents);

module.exports = router;
