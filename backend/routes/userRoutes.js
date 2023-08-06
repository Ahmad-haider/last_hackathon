const express = require("express")
const routes = express.Router()

const {doLogin, doSignUp} = require("../controller/authController")

routes.post('/login', doLogin)

routes.post('/signup',doSignUp)


module.exports = routes