const { runQuery } = require('../config/database.config')
const { getCategoryByName } = require('../queries/category.queries')
const { responseProvider }  = require('../../helper/response');



// prevent duplicate categories
const preventDuplicateCategories = async (req, res, next) => {

  try {

    const { name } = req.body

    const [ categoryName = null ] = await runQuery(getCategoryByName, [name])

    if (categoryName){
        return responseProvider(res, null, 'Duplicate Category: category already exists', 400)

    }

    
    return next()
  } catch (error) {
    return next(error)
  }

}





const checkCategories = async (req, res, next) => {
  try {

    const { name } = req.body

    const [ categoryName = null ] = await runQuery(getCategoryByName, [name])

    if (!categoryName){
        return responseProvider(res, null, 'Invalid category!', 400)

    }

    
    return next()
  } catch (error) {
    return next(error)
  }
}


module.exports = {
  preventDuplicateCategories,
  checkCategories
}