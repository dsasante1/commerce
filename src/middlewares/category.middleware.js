const { runQuery } = require('../config/database.config')
const { checkCategory } = require('../queries/category.queries')
const responseProvider  = require('../../helper/response');



const checkCategories = async (req, res, next) => {
  try {

    const { name } = req.body

    const [ categoryName = null ] = await runQuery(checkCategory, [name])

    if (!categoryName){
        return responseProvider(res, null, 'Invalid category!', 400)

    }
    
    return next()
  } catch (error) {
    return next(error)
  }
}


module.exports = {checkCategories}