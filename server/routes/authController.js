const { json } = require('express')
const User = require('../model/user.model')

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email })
    if (!user) {
      return res
        .status(400)
        .json({ msg: 'User with that email does not exist.' })
    }

    if (!user.isValidPassword(password)) {
      return res.status(400).json({ msg: 'Wrong credentials.' })
    }
    const token = user.generateToken()

    res.cookie(String(user._id), token, {
      expires: new Date(Date.now() + 90000000),
      httpOnly: true,
      sameSite: 'lax',
    })
    res
      .status(201)
      .json({ msg: 'You are successfully logged in.', user, token })
  } catch (err) {
    console.log(err.message)
    res.status(400).json({ error: `User not found: ${err.message}` })
  }
}
const signUp = async (req, res) => {
  let existUser
  const { name, email, password } = req.body
  try {
    existUser = await User.findOne({ email: email })
    if (existUser) {
      return res.status(400).json({ msg: 'User already exist. Please, login.' })
    }
    const data = await User.create({ name, email, password })
    res.status(201).json(data)
  } catch (err) {
    console.log(err.message)
    res.status(400).json({ error: `User not created. ${err.message}` })
  }
}
const authUser = async (req, res) => {
  try {
    let user = await User.findById(req.id)

    if (!user) {
      return res.status(400).json({ msg: 'User not found.' })
    }
    res.status(200).json({ user: user.removePassword() })
  } catch (err) {
    console.log(err.message)
    return res.status(400).json({ msg: `${err.message}` })
  }
}

module.exports = { signUp, login, authUser }
