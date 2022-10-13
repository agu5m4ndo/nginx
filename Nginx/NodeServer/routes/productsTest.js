const express = require('express');
const productosTest = express.Router();
const testView = express.Router();
const { testAPI, showView } = require('../controllers/productTest');

const { auth } = require('../controllers/middleware/auth')

productosTest.route('/').get(auth, testAPI);
testView.route('/').get(auth, showView);


module.exports = {
    productosTest,
    testView
};