const express = require('express');
const router = express.Router();
const { checkControllerInput } = require('../middlewares/validation.middleware');

const {
    addCategory,
    getAllCategories,
    getCategoryByName

} = require('../controllers/category.controllers')


// add a product category
router.post('/', checkControllerInput, addCategory)

// fetch all categories
router.get('/', getAllCategories)

//get a category by its name
router.get('/', checkControllerInput, getCategoryByName)



module.exports = router;