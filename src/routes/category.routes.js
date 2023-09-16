const express = require('express');
const router = express.Router();
const { checkControllerInput } = require('../middlewares/validation.middleware');

const { checkCategories, preventDuplicateCategories} = require('../middlewares/category.middleware')

const {
    addCategory,
    getAllCategories,
    getCategoryByName

} = require('../controllers/category.controllers')


// add a product category
router.post('/', checkControllerInput, preventDuplicateCategories,addCategory)

// fetch all categories
router.get('/all', getAllCategories)

//get a category by its name
router.get('/', checkControllerInput, checkCategories, getCategoryByName)



module.exports = router;