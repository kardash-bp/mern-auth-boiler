const express = require('express')
const { isAuth } = require('../middlewares/isAuth')
const { signUp, login, authUser } = require('./authController')
const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.post('/signup', signUp)
authRouter.get('/user', isAuth, authUser)

module.exports = authRouter
