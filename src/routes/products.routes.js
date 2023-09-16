const express = require('express');
const router = express.Router();
const { checkToken } = require('../middlewares/auth.middleware');
const { checkProductInput } = require('../middlewares/validation.middleware');
const { checkIfIdExists } = require('../middlewares/user.middleware');  
const { checkValidProduct } = require('../middlewares/product.middleware');


const {
  createProduct,
  fetchAllProducts,
  getProductsByCategory,
  buyProduct
} = require('../controllers/products.controllers');



router.post('/', checkToken, checkProductInput, createProduct);
router.get('/', fetchAllProducts);
router.get('/user/:id', checkIfIdExists, getProductsByCategory,);
router.post('/edit/:id', checkToken, checkProductInput, checkValidProduct,  buyProduct);

module.exports = router;
