const {
    addCategory,
    getAllCategory,
    getCategoryByName,
    getCategoryById
} = require('../queries/category.queries')

const { runQuery } = require('../config/database.config')

const { provideResponse } = require('../../helper/response');


//add product category
// unique categories no duplicates
const createCategory = async ( name ) => {

    const category = await runQuery(addCategory, [name])

  

    if(!category){

      return provideResponse("failed", 400 , 'Adding Product category failed!', null)
    }
    
    return provideResponse("success", 201, 'Product category added successfully!', category)

  };




// fetch categories
const fetchAllCategories = async () => {

    const  allCategory  = await runQuery(getAllCategory)

    if(!allCategory){

      return provideResponse("failed", 400 , 'No product category!', null)
    }
    
    return provideResponse("success", 201, 'fetched product categories successfully!', allCategory)

  };




// get category by name
const fetchCategoryByName = async (name) => {
    
    const  categoryByName   = await runQuery(getCategoryByName, [name])

    if(!categoryByName){

      return provideResponse("failed", 400 , 'No product category matched your query!', null)
    }
    
    return provideResponse("success", 201, 'category fetched successfully!', categoryByName)

    };


  const fetchCategoryById = async (id) => {
    
    const output = await runQuery(getCategoryById, [id])

    if (!output){
      return provideResponse("failed", 400 , 'No product category matched your query!', null)
    }
    
    return provideResponse("success", 201, 'categories fetched successfully!', output)

};






module.exports = {

createCategory,
fetchAllCategories,
fetchCategoryByName,
fetchCategoryById

}