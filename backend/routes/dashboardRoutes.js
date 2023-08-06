const express = require("express")
const routes = express.Router()

const {productadd,  getProduct } = require("../controller/dashboardController")

routes.post('/addproduct',  productadd)


routes.get('/getproduct',   getProduct)



module.exports = routes