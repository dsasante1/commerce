const express = require('express');
const router = express.Router();

const { 
    checkCreateCategoryInput,
     checkCategoryIdInput
     } = require('../middlewares/validation.middleware');


const { 
    checkCategories, 
    preventDuplicateCategories, 
    checkCategoriesById 
} = require('../middlewares/category.middleware')


const {
    addCategory,
    getAllCategories,
    getCategoryByName,
    getCategoryById

} = require('../controllers/category.controllers')


// add a product category
router.post('/', checkCreateCategoryInput, preventDuplicateCategories,addCategory)

// fetch all categories
router.get('/all', getAllCategories)

//get a category by its name
router.get('/', checkCreateCategoryInput, checkCategories, getCategoryByName)

//get a category by its id
router.get('/:id', checkCategoryIdInput, checkCategoriesById, getCategoryById)


module.exports = router;