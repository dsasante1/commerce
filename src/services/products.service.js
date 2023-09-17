//  Create a product
//  Buy a product (when a user buys a product, increase quantity_sold by 1) (user must be logged in)
//  Fetch all products in a particular category
//  Fetch all products(include the category name for each product)


const {
    createProduct,
    buyProduct,
    fetchAllProducts,
    getProductsByCategory
  } = require('../queries/products.queries');
  
  
  const { runQuery } = require('../config/database.config');
  const { provideResponse } = require('../../helper/response');


  
   //Creates a new product in the db
  const makeProduct = async (name, price, quantity ) => {

    const product = await runQuery(createProduct, [name, price, quantity]);

    if(!product){

      return provideResponse("failed", 400 , 'Adding Product  failed!', null)
    }
    
    return provideResponse("success", 201, 'Product  added successfully!', product)

  };
  
  


   //Fetches all products from the db
  const getAllProducts = async () => {
   
    const result = await runQuery(fetchAllProducts);

    if(!result){

      return provideResponse("failed", 400 , 'Fetching Product  failed!', null)
    }
    
    return provideResponse("success", 201, 'Products fetched successfully!', result)

  };
  
  
   
  
  //Gets products by category
  const fetchProductsByCategory = async (name) => {
    const result = await runQuery(getProductsByCategory, [name]);

    if(!result){

      return provideResponse("failed", 400 , 'Fetching Product  failed!', null)
    }
    
    return provideResponse("success", 201, 'Products fetched successfully!', result)
  };
  
  


  // Buy a product 
  const buyAProduct = async (name) => {

      const result = await runQuery(buyProduct, [name]);
    
    
      if(!result){

      return provideResponse("failed", 400 , 'Transaction failed!', null)
    }
    
    return provideResponse("success", 201, 'Transaction success!', result)
  }
  
  
  

  
  
  module.exports = {
    makeProduct,
    getAllProducts,
    fetchProductsByCategory,
    buyAProduct
  };
  