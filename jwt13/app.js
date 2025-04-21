const express = require('express') ; 
const userRoute = require('./routes/register.route') ;
const loginRoute = require('./routes/login.route') ;

const router = express.Router() ;
const app  = express() ; 

app.use(express.json()) ; 

app.use('/api/v1/register', userRoute); 
app.use('/api/v1/login', loginRoute);

module.exports = app ;

