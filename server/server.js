require('dotenv').config()
require('./db.js')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/authRouter')
const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
)
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))
const port = process.env.PORT

app.use('/v1', authRouter)
app.get('/v1', (req, res) => {
  res.send('<h1>HOME PAGE</h1>')
})
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`)
})
