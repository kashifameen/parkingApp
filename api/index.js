const express = require('express')
const Routes = require('./Config/Routes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

Routes(app)

module.exports = app