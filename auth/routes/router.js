const express = require('express');
const router = express.Router();
// Import the signup controller
const { signup } = require('../controler/authcontroler');
const { login } = require('../controler/authcontroler');

// Define the signup route
router.post('/signup', signup);
router.post('/login', login);


module.exports = router;