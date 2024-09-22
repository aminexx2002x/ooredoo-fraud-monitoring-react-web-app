// userRoutes.js

const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

// Define the route to get all users
router.get('/user', userController.getUsers); // This line seems to be causing the error

// Define the route to create a new user
router.post('/user', userController.createUser);

router.delete('/user/:id', userController.deleteUser);

module.exports = router;
