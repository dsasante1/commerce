const {
    makeProduct,
    getAllProducts,
    fetchProductsByCategory,
    buyAProduct,
    increaseProductQuantity
  } = require('../services/products.service');
  



  //Creates a product
  const createProduct = async (req, res, next) => {
    try {
      
      const { name, price, quantity } = req.body

      const { id } = req.params



      const response = await makeProduct(name, price, quantity, id);

      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  

  //restock a product
  const supplyProducts = async (req, res, next) => {
    try {
      
      const { name, quantity, price } = req.body


      const response = await increaseProductQuantity(name, quantity, price);

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
      const { id } = req.params;
   
      const response = await fetchProductsByCategory(id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  


  
    //change the details of a product
  
  const buyProduct = async (req, res, next) => {
    try {
      const {name, quantity} = req.body;
      
      const response = await buyAProduct(name, quantity);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  
  

  
  
  module.exports = {
    createProduct,
    fetchAllProducts,
    getProductsByCategory,
    buyProduct,
    supplyProducts
  };
  