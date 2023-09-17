const { runQuery } = require('../config/database.config');
const { fetchProductsByName, getProductPrice } = require('../queries/products.queries');
const { responseProvider }  = require('../../helper/response');


// check product availability
// the quantity
const checkProductAvailability = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;

    const [product = null, stockQuantity = null] = await runQuery(fetchProductsByName, [name]);

    if (!product) {

      return responseProvider(res, null, 'Product out of stock!', 400)

    }

    if (quantity > stockQuantity){
   
      return responseProvider(res, quantity, `your demand exceeds the number of items available for sale`, 400)
    }

    return next()

  } catch (error) {
    return next(error);
  }
};



const checkUserPrice = async (req, res, next) => {

  try{
    const { price } = req.body

    const [productPrice = null] = await runQuery (getProductPrice, [price])

    if (price < productPrice){
      return responseProvider(res, null, 'Chief didnt you see the price?', 400)
    }

    return next()

  } catch (error) {
    return next(error);
  }
}


module.exports = {
  checkProductAvailability,
  checkUserPrice
};
