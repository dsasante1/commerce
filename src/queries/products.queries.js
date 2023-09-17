//  Create a product
//  Buy a product (when a user buys a product, increase quantity_sold by 1) (user must be logged in)
//  Fetch all products in a particular category
//  Fetch all products(include the category name for each product)



const createProduct = `
INSERT INTO products (
    name,
    price,
    quantity,
   category_id 
) 
VALUES ($1, $2, $3, $4) RETURNING *
`;



//buy  a product and increase the
//amount of products bought
//user must be logged in
const buyProduct = `
UPDATE products
SET quantity_sold = quantity_sold + $2, 
quantity = quantity - $2
WHERE name=$1
RETURNING name, price, quantity, quantity_sold
`;





// restock empty products
const updateProductQuantity = `
UPDATE products
SET quantity=$2, price=$3
WHERE name=$1
RETURNING name, price, quantity, quantity_sold
`





// fetch all products including their category names
const fetchAllProducts = `SELECT 
products.name AS product,
products.price, 
products.quantity, 
products.quantity_sold,
category.name AS category

FROM 
products

INNER JOIN category

ON products.category_id=category.id`






//fetch product from one category
const getProductsByCategory = `SELECT 
products.name AS product,
products.price, 
products.quantity, 
products.quantity_sold,
category.name AS category

FROM products
INNER JOIN category

ON products.category_id = category.id

WHERE products.category_id=$1`




const fetchProductsByName = `

SELECT name, quantity FROM products WHERE name=$1
`


const getProductPrice = `
SELECT price FROM products WHERE name=$1 
`



module.exports = {
 createProduct,
 buyProduct,
 fetchAllProducts,
 getProductsByCategory,
 fetchProductsByName,
 getProductPrice,
 updateProductQuantity
}




