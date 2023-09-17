const {
    makeProduct,
    getAllProducts,
    fetchProductsByCategory,
    buyAProduct
  } = require('../services/products.service');
  



  //Creates a product
  const createProduct = async (req, res, next) => {
    try {
      
      const { name, price, quantity } = req.body

      const response = await makeProduct(name, price, quantity);

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
      const { name } = req.body;
      const response = await fetchProductsByCategory(name);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  


  
    //change the details of a product
  
  const buyProduct = async (req, res, next) => {
    try {
      const {name} = req.body;
      
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
  