const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.rjvv0qb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connect = mongoose.connect(uri)
module.exports = connect