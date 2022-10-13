const express = require('express')
const router = express.Router();

const { auth } = require('../controllers/middleware/auth')
const { logoutView } = require('../controllers/logout');

router.route('/').get(auth, logoutView);

module.exports = router;