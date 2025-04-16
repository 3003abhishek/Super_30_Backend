const express = require('express');

const app = express() ; 
const  userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/error.middleware");

app.use(express.json());
app.use("/api/users",userRoutes);

app.use(errorHandler);

module.exports = app ;