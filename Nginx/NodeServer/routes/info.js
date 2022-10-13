const express = require('express');
const router = express.Router();

const { getHtml, getData } = require('../controllers/info.js')
const { auth } = require('../controllers/middleware/auth');

router.route('/').get(auth, getHtml);
router.route('/data').get(auth, getData);

module.exports = router;