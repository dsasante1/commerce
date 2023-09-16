const {
    makeProduct,
    getAllProducts,
    getProductsByCategory,
    buyAProduct
  } = require('../services/products.service');
  



  //Creates a product
  const createProduct = async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await makeProduct(req.body, id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  




  //Fetches all products  
  const fetchAllProducts = async (req, res, next) => {
    try {
      const result = await getAllProducts();
      return res.status(result.code).json(result);
    } catch (error) {
      return next(error);
    }
  };
  


 
    //Gets products by category
  const getProductsByCategory = async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await getProductsByCategory(id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  


  
    //change the details of a product
  
  const buyProduct = async (req, res, next) => {
    try {
      const {name} = req.body;
      const { id } = req.user;
      const response = await buyAProduct(name);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  
  

  
  
  module.exports = {
    createProduct,
    fetchAllProducts,
    getProductsByCategory,
    buyProduct
  };
  