const { runQuery } = require('../config/database.config');
const { fetchProductsByName, getProductPrice } = require('../queries/products.queries');
const { responseProvider }  = require('../../helper/response');



// check product availability
// the quantity
const checkProductAvailability = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;

    const [stockQuantity = null] = await runQuery(fetchProductsByName, [name]);


    if (!stockQuantity.name) {

      return responseProvider(res, null, 'Product out of stock!', 400)

    }

    if (quantity > stockQuantity.quantity){
   
      return responseProvider(res, quantity, `your demand exceeds the number of items available for sale`, 400)
    }

    return next()

  } catch (error) {
    return next(error);
  }
};



const checkUserPrice = async (req, res, next) => {

  try{
    const { price, name } = req.body


    const [productPrice = null] = await runQuery (getProductPrice, [name])
    
    if(Number(productPrice.price)){

      if (price < Number(productPrice.price)){
        return responseProvider(res, null, 'Chief you no see the price?', 400)
      }
  
  }
  
    return next()

  } catch (error) {
    return next(error);
  }
}



// prevent duplicate products
const preventDuplicateProducts = async (req, res, next) => {

  try {

    const { name } = req.body

    const [ result = null ] = await runQuery(fetchProductsByName, [name.toLowerCase()])

    if (result){
        return responseProvider(res, null, 'Duplicate product: product already exists', 400)

    }

    
    return next()
  } catch (error) {
    return next(error)
  }

}


// prevent duplicate products
const resupplyEmptyProducts = async (req, res, next) => {

  try {

    const { name } = req.body

    const [ output = null ] = await runQuery(fetchProductsByName, [name.toLowerCase()])
    

    if (output.name && output.quantity > 1){
        return responseProvider(res, null, 'Product in stock', 400)

    }

    
    return next()
  } catch (error) {
    return next(error)
  }

}




module.exports = {
  checkProductAvailability,
  checkUserPrice,
  preventDuplicateProducts, 
  resupplyEmptyProducts 
};
