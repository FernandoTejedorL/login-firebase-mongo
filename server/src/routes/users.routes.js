const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.get('/', usersController.getAllUsers);
usersRoutes.post('/', usersController.createUser);

module.exports = usersRoutes;
