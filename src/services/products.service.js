//  Create a product
//  Buy a product (when a user buys a product, increase quantity_sold by 1) (user must be logged in)
//  Fetch all products in a particular category
//  Fetch all products(include the category name for each product)


const {
    createProduct,
    buyProduct,
    fetchAllProducts,
    getProductsByCategory,
    updateProductQuantity
  } = require('../queries/products.queries');
  
  
  const { runQuery } = require('../config/database.config');
  const { provideResponse } = require('../../helper/response');


  
   //Creates a new product in the db
  const makeProduct = async (name, price, quantity, id ) => {

    const product = await runQuery(createProduct, [name.toLowerCase(), price, quantity, id]);

    if(!product){

      return provideResponse("failed", 400 , 'Adding Product  failed!', null)
    }
    
    return provideResponse("success", 201, 'Product  added successfully!', product)

  };
  
  

    
   //Creates a new product in the db
   const increaseProductQuantity = async (name, quantity, price) => {

    const product = await runQuery(updateProductQuantity, [name.toLowerCase(), quantity, price]);

    if(!product){

      return provideResponse("failed", 400 , ' Failed to update product  quantity!', null)
    }
    
    return provideResponse("success", 201, 'Product quantity updated!', product)

  };
  



// todo: response for empty lists
// or results
// before query failed

// get the product name 


   //Fetches all products from the db
  const getAllProducts = async () => {
   
    const result = await runQuery(fetchAllProducts);

    if(result.length === 0){

      return provideResponse("success", 200 , 'sorry your query did not match any Product!', null)
    }
    
    return provideResponse("success", 201, 'Products fetched successfully!', result)

  };
  
  
   
  // todo: response for empty lists
// or results
// before query failed

// get product name


  //Gets products by category
  const fetchProductsByCategory = async (id) => {

    const result = await runQuery(getProductsByCategory, [id]);

    if(result.length === 0){

      return provideResponse("success", 200 , 'sorry your query did not match any Product!', null)
    }
    
    return provideResponse("success", 201, 'Products fetched successfully!', result)
  };
  
  


  // Buy a product 
  const buyAProduct = async (name, quantity) => {

      const result = await runQuery(buyProduct, [name, quantity]);

    
      if(!result){

      return provideResponse("failed", 400 , 'Transaction failed!', null)
    }
    
    return provideResponse("success", 201, 'Transaction success!', result)
  }
  
  
  

  
  
  module.exports = {
    makeProduct,
    getAllProducts,
    fetchProductsByCategory,
    buyAProduct,
    increaseProductQuantity
  };
  