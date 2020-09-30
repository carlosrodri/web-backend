import express from "express";
import IndexRoutes from "./routes/index.routes";
import WebRoutes from "./routes/web.routes";
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)
app.use(cors())

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))

//Routes
app.use(IndexRoutes)
app.use('/web', WebRoutes)

export default app;