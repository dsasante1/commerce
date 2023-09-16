const {

    addCategory,
    getAllCategory,
    getCategoryByName

} = require('../queries/category.queries')

const { runQuery } = require('../config/database.config')



//add product category
const createCategory = async ( name ) => {

    const category = await runQuery(addCategory, [name])

    return {
      status: 'success',
      message: 'Product category added successfully!',
      code: 201,
      data: {
        category,
      },
    };
  };




// fetch categories
const fetchAllCategories = async () => {

    const allCategory = await runQuery(getAllCategory())
    return {
        status: 'success',
        message: 'Product category fetched successfully!',
        code: 201,
        data: {
          allCategory,
        },
      };
    };




// get category by name
const fetchCategoryByName = async (name) => {
    const categoryByName = await runQuery(getCategoryByName, [name])
    return {
        status: 'success',
        message: 'category fetched successfully!',
        code: 201,
        data: {
          categoryByName,
        },
      };
    };

module.exports = {

createCategory,
fetchAllCategories,
fetchCategoryByName

}