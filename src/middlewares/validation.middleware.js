const  { responseProvider }  = require('../../helper/response');




const checkCreateUserInput = (req, res, next) => {

  try {
    const { email, username, password } = req.body;


    if (typeof email !== 'string' || !email.includes('@')) {
      return responseProvider( res, null, 'provide a valid email', 400)
    }

    if (typeof username !== 'string') {
      return responseProvider( res, null, 'provide a valid username', 400)
    }

    if (typeof password !== 'string' || password.length < 8) {
      return responseProvider( res, null, 'provide a valid password', 400)
    }

    return next();
  } catch (error) {
    return next(error);
  }
};




const checkUserLoginInput = (req, res, next) => {

  try {
    const { email, password } = req.body;


    if (typeof email !== 'string' || !email.includes('@')) {
      return responseProvider( res, null, 'provide a valid email', 400)
    }


    if (typeof password !== 'string' || password.length < 8) {
      return responseProvider( res, null, 'provide a valid password', 400)
    }

    return next();
  } catch (error) {
    return next(error);
  }
};





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





const checkCreateCategoryInput = (req, res, next) => {
  
  try{
    const { name } = req.body;

    if (!name || typeof name !== 'string') {
      return responseProvider(res, null, 'provide a valid category name', 400)
    }

    return next();
  } catch (error) {
    return next(error);
  }
}



const checkCategoryIdInput = (req, res, next) => {
  
  try{
    const { id } = req.params;

    if (!id || typeof id !== 'number') {
      return responseProvider(res, null, 'provide a valid category id', 400)
    }

    return next();
  } catch (error) {
    return next(error);
  }
}





module.exports = {
  checkCreateUserInput,  
  checkUserLoginInput,
  checkProductInput,
  checkCreateCategoryInput,
  checkCategoryIdInput
}
