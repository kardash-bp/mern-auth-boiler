const mongoose = require('mongoose')

class Database {
  constructor() {
    this.connect()
  }
  async connect() {
    await mongoose
      .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Database connected'))
      .catch((err) => console.log(`Database connection error: ${err.message}`))
  }
}

module.exports = new Database()
