const express = require('express');
const router = express.Router();
const { checkToken } = require('../middlewares/auth.middleware');
const { checkProductInput } = require('../middlewares/validation.middleware');
const { checkCategoriesById } = require('../middlewares/category.middleware');  
const { checkProductAvailability, checkUserPrice } = require('../middlewares/products.middleware');


const {
  createProduct,
  fetchAllProducts,
  getProductsByCategory,
  buyProduct
} = require('../controllers/products.controllers');



// create a product
router.post('/:id', checkProductInput, createProduct);


// fetch all products
router.get('/', fetchAllProducts);

// check if the product category exits
// get all products of a particular category
router.get('/user/:id', checkCategoriesById, getProductsByCategory,);

// check if the buyer has logged in
// check the buyer input
// check if the product is in stock
// check the amount provided by the user.
router.put('/buy', checkToken, checkProductInput, checkProductAvailability,  checkUserPrice, buyProduct);



module.exports = router;
