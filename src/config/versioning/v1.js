const express = require('express');
const api = express.Router();
const users = require('../../routes/user.routes');
const products = require('../../routes/products.routes');
const category = require('../../routes/category.routes')


api.get('/', (req, res) =>
  res.status(200).json({
    status: 'success',
    message: 'Welcome to My E-Commerce App API',
  })
);


api.use('/users', users);
api.use('/products', products);
api.use('/category', category)


module.exports = api;

