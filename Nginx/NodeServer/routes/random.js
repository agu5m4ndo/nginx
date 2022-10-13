const express = require('express');
const router = express.Router();

const { generateRandom } = require('../controllers/random.js');

router.route('/').get(generateRandom);

module.exports = router;