const express = require('express'); 
const mongoose = require('mongoose');


const app = express() ; 

app.use(express.json());

const PORT = process.env.PORT || 5000 ; 

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/my_course_hub').then(()=>{
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})

