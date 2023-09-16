const { runQuery } = require('../config/database.config');
const { fetchProductsByName, getProductPrice } = require('../queries/products.queries');
const responseProvider  = require('../../helper/response');




// function responseProvider(res, data, message, code) {
//   return res.status(code).json({ message, data });
// }




// check product availability
const checkProductAvailability = async (req, res, next) => {
  try {
    const { name } = req.body;

    const [product = null] = await runQuery(fetchProductsByName, [name]);

    if (!product) {

      return responseProvider(res, null, 'Product out of stock!', 400)

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
