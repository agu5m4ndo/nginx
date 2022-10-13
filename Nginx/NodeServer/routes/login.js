const express = require('express');
const router = express.Router();

const { authenticate } = require('../controllers/middleware/passport')

const {
    getHtml,
    sessionData,
    loginErrorHtml
} = require('../controllers/login');

router.route('/').get(getHtml).post(authenticate)
router.route('/session').get(sessionData)
router.route('/error').get(loginErrorHtml)

module.exports = router;