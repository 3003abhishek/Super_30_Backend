const express = require('express') ; 
const dotenv = require('dotenv') ;
dotenv.config() ;
const authMiddleware = require('./middlewares/auth.middleware') ;
const userRoute = require('./routes/register.route') ;
const loginRoute = require('./routes/login.route') ;
const productRoute = require('./routes/getProduct.route') ;

const router = express.Router() ;
const app  = express() ; 

app.use(express.json()) ; 

app.use('/api/v1/register', userRoute); 
app.use('/api/v1/login', loginRoute);

app.use("/api/v1/products", productRoute) ;

module.exports = app ;

