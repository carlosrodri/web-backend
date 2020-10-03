import express from "express";
import IndexRoutes from "./routes/index.routes";
import WebRoutes from "./routes/web.routes";
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(morgan('dev'))

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))

//Routes
app.use(IndexRoutes)
app.use('/web', WebRoutes)

export default app;