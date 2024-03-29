const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv/config')

const db = require("./config/db");

const users = require('../backend/routes/users')
const products = require('../backend/routes/products')
const categories = require('../backend/routes/categories')
const orders = require('../backend/routes/orders')
const ordersItems = require('../backend/routes/orderItems')
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

db();

//intialize express
const app = express();
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json())
app.use(cors())
app.options("*", cors())
app.use(authJwt());
app.use(errorHandler);
app_url = process.env.APP_URL



app.use(`${app_url}/products`, products)
app.use(`${app_url}/users`, users)
app.use(`${app_url}/orders`, orders)
app.use(`${app_url}/categories`, categories)
app.use(`${app_url}/orderItems`, ordersItems)

app.get("/", (req,res)=>{
    res.send("Hello")
})

app.listen(3000, ()=> {
    console.log("App listening on port "+3000)
    console.log("App base url "+ app_url)
})


