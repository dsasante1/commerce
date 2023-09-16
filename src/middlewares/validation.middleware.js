const responseProvider  = require('../../helper/response');



// function responseProvider(res, data, message, code) {
//   return res.status(code).json({ message, data });
// }



const checkProductInput = (req, res, next) => {

  try {
    const { name, price, quantity } = req.body;


    if (!name) {
      return responseProvider( res, null, 'provide a valid name', 400)
    }

    
    if (typeof price !== "number") {
      return responseProvider( res, null, 'provide a valid product price', 400)
    }


    if (typeof quantity !== "number") {
      return responseProvider( res, null, 'provide a valid total number of products', 400)
    }

    return next();
  } catch (error) {
    return next(error);
  }
};





const checkControllerInput = (req, res, next) => {
  
  try{
    const { name } = req.body;

    if (!name) {
      return responseProvider(res, null, 'provide a valid category name', 400)
    }

    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
    checkProductInput,
    checkControllerInput
}
