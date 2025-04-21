
const mongoose = require('mongoose'); 
const app = require('./app');


mongoose.connect('mongodb://localhost:27017/myJwt').then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((err) => {
    console.log("There was an error connecting to MongoDB", err);
})

