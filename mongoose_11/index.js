const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectMongo = require('./config/db');
const app = require('./app');

dotenv.config();

 connectMongo().then(()=>{
   app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
   });
 })