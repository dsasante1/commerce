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
  

  
   //Creates a new product in the db
  const makeProduct = async (name, price, quantity ) => {
  
    const product = await runQuery(createProduct, [name, price, quantity]);
    return {
      status: 'success',
      message: 'Product created successfully!',
      code: 201,
      data: {
        product,
      },
    };
  };
  
  


   //Fetches all products from the db
  const getAllProducts = async () => {
    const result = await runQuery(fetchAllProducts);
    return {
      status: 'success',
      message: 'Products fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };
  
  
   
  
  //Gets products by category
  const fetchProductsByCategory = async (name) => {
    const result = await runQuery(getProductsByCategory, [name]);
    return {
      status: 'success',
      message: 'Products fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };
  
  


  // Buy a product 
  const buyAProduct = async (name) => {
      const result = await runQuery(buyProduct, [name]);
      return {
        status: 'success',
        message: 'Products edited successfully!',
        code: 200,
        data: {
          result,
        },
      };
  }
  
  
  

  
  
  module.exports = {
    makeProduct,
    getAllProducts,
    fetchProductsByCategory,
    buyAProduct
  };
  