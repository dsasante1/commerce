//  Create a product
//  Buy a product (when a user buys a product, increase quantity_sold by 1) (user must be logged in)
//  Fetch all products in a particular category
//  Fetch all products(include the category name for each product)



const createProduct = `
INSERT INTO products (
    name,
    price,
    quantity
) VALUES ($1, $2, $3) RETURNING *
`;


//buy  a product and increase the
//amount of products bought
//user must be logged in
const buyProduct = `
UPDATE products
SET quantity_sold = quantity_sold + 1
WHERE name=$1
RETURNING *
`;




// fetch all products including their category names
const fetchAllProducts = `SELECT 
products.name,
product.price, 
products.quantity, 
products.quantity_sold,
category.name

FROM products
INNER JOIN category

ON products.category_id=categories.id`






//fetch product from one category
const fetchProductsByCategory = `SELECT 
products.name,
product.price, 
products.quantity, 
products.quantity_sold,
category.name 

FROM products

INNER JOIN category
ON products.category_id = category.id

WHERE products.category_id=$1`




module.exports = {
 createProduct,
 buyProduct,
 fetchAllProducts,
 fetchProductsByCategory
}




