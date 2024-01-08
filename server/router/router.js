const express = require('express');
const router = express.Router();
const UsersController = require('../controller/UsersController');
const BlogController = require('../controller/BlogController');

// Users
router.post('/login', UsersController.login)
router.post('/register', UsersController.register)

// Blog CRUD
router.post('/create-post', BlogController.create)
router.get('/all-posts', BlogController.getAll)
router.get('/post/:userId', BlogController.getById)
router.put('/update-post/:userId', BlogController.update)
router.delete('/delete-post/:userId', BlogController.delete)

module.exports = router