const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controllers/auth-controller')
const ProductController = require('../controllers/product-controller')
const Restaurants = require("../controllers/RestaurantsId")
const products = require('../controllers/productdetell')
const adminController = require('../controllers/admin-controller')

const userpay = require('../controllers/userpayment')
const { route } = require('./todo-route')
const { orders } = require('../models/db')


router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/res', Restaurants.createRestaurants)
router.post('/payment', products.payments);


router.get('/me', authenticate, authController.getme) 
router.get('/getproduct', authenticate, ProductController.getproduct) 
router.post('/product', ProductController.createProduct)
router.get ('/getproduct/:id', products.orderdate)
router.get('/user', authenticate,userpay.userid)
router.get('/getorder',authenticate,adminController.getorders)
router.get('/userorders', authenticate,products.userorder)
router.delete("/delete/:productId", adminController.deleteproduct)

module.exports = router