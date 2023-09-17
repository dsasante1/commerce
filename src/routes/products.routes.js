const express = require('express');
const router = express.Router();
const { checkToken } = require('../middlewares/auth.middleware');
const { checkProductInput } = require('../middlewares/validation.middleware');
const { checkCategoriesById } = require('../middlewares/category.middleware');  


const { 
  checkProductAvailability, 
  checkUserPrice, 
  preventDuplicateProducts,
  resupplyEmptyProducts 
} = require('../middlewares/products.middleware');


const {
  createProduct,
  fetchAllProducts,
  getProductsByCategory,
  buyProduct,
  supplyProducts
} = require('../controllers/products.controllers');



// create a product
router.post('/:id', checkProductInput, preventDuplicateProducts, createProduct);


//resupply sold out products
router.put('/supply', resupplyEmptyProducts, supplyProducts)



// fetch all products
router.get('/', fetchAllProducts);

// check if the product category exits
// get all products of a particular category
router.get('/types/:id', checkCategoriesById, getProductsByCategory);

// check if the buyer has logged in
// check the buyer input
// check if the product is in stock
// check the amount provided by the user.
router.put('/buy', checkToken, checkProductInput, checkProductAvailability,  checkUserPrice, buyProduct);



module.exports = router;
