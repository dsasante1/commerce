const {
    createCategory,
    fetchAllCategories,
    fetchCategoryByName,
    fetchCategoryById
} = require('../services/category.service')



const addCategory = async (req, res, next) => {
    try{

        const { name } = req.body

        const output = await createCategory(name)
        return res.status(output.code).json(output)
    }catch(error){
        next(error)
    }
}


const getAllCategories = async(req, res, next) => {
    try{
        const output = await fetchAllCategories()
        return res.status(output.code).json(output)
    }catch(error){
        next(error)
    }
}



const getCategoryByName = async(req, res, next) => {

    try{
        const { name } = req.body
        
        const output = await fetchCategoryByName(name)
        
        return res.status(output.code).json(output)
    }catch(error){
        next(error)
    }
}




// get category by id
const getCategoryById = async(req, res, next) => {

    try{
        const { id } = req.params
        
        const output = await fetchCategoryById(id)
        
        return res.status(output.code).json(output)
    }catch(error){
        next(error)
    }
}


module.exports = {
    addCategory,
    getAllCategories,
    getCategoryByName,
    getCategoryById
}