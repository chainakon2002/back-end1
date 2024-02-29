const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controllers/auth-controller')
const ProductController = require('../controllers/product-controller')
const Restaurants = require("../controllers/RestaurantsId")
const products = require('../controllers/productdetell')
const adminController = require('../controllers/admin-controller')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.post('/res', Restaurants.createRestaurants)

router.get('/me', authenticate, authController.getme) 
router.get('/getmenutems', authenticate, ProductController.getmenutems) 
router.post('/menutems', ProductController.createMenutems)
router.get ('/getproduct/:id', products.orderdate)
router.delete("/delete/:menutemsId", adminController.deleteproduct)
module.exports = router