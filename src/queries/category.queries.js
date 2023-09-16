
const addCategory = `
 INSERT INTO category (
   name
 )
 VALUES ($1) RETURNING id, name, created_at
`;


const getAllCategory = `
SELECT * FROM category
`;


const getCategoryByName = `SELECT name FROM category WHERE name=$1`;


module.exports = {
  addCategory,
  getAllCategory,
  getCategoryByName
}