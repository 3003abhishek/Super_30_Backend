const express = require('express') ; 
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.route') ;
const dotenv = require('dotenv');
dotenv.config();

const app = express() ; 

app.use(express.json()); 

app.use("/api/auth",authRoute) ;

module.exports = app ; 