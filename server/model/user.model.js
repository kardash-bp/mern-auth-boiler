const mongoose = require('mongoose')
const crypto = require('crypto')
const { v4 } = require('uuid')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 33,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  salt: {
    type: String,
  },
})

UserSchema.methods.isValidPassword = function (pass) {
  const newHash = crypto
    .createHmac('sha1', this.salt)
    .update(pass)
    .digest('hex')

  return this.password === newHash
}

UserSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  })
}
UserSchema.methods.removePassword = function () {
  delete this._doc.password
  delete this._doc.salt
  delete this._doc.__v
  return this._doc
}
UserSchema.pre('save', function (next) {
  const user = this
  user.salt = v4()
  console.log(user.isModified('password'))
  if (!user.isModified('password')) return next()

  user.password = crypto
    .createHmac('sha1', user.salt)
    .update(user.password)
    .digest('hex')

  next()
})
module.exports = mongoose.model('User', UserSchema)
