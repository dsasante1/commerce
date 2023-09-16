const express = require('express');
const api = express.Router();
const users = require('../../routes/user.routes');
const products = require('../../routes/products.routes');


api.get('/', (req, res) =>
  res.status(200).json({
    status: 'success',
    message: 'Welcome to My E-Commerce App API',
  })
);

api.use('/users', users);
api.use('/products', products);

module.exports = api;

