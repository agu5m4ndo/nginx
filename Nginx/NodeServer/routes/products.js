const express = require('express');
const router = express.Router();
const { auth } = require('../controllers/middleware/auth')

const {
    getAllProducts,
    getOneProduct,
    postProduct,
    deleteProduct
} = require('../controllers/products');

router.route('/').get(auth, getAllProducts).post(postProduct);
router.route('/:id').get(auth, getOneProduct).delete(auth, deleteProduct);

module.exports = router;