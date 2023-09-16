const express = require('express');
const router = express.Router();


const {
  createUser,
  signInUser,
} = require('../controllers/user.controllers');


router.post('/signup', createUser);
router.post('/login', signInUser);

module.exports = router;
