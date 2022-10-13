const express = require('express');
const router = express.Router();

const { getHtml, registerUser, registerErrorHtml } = require('../controllers/register.js');

router.route('/').get(getHtml).post(registerUser)
router.route('/error').get(registerErrorHtml)

module.exports = router;