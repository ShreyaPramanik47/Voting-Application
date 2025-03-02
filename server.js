// server create
const express = require('express')
const app = express();

// db
const db = require('./db');

// require .env file
require('dotenv').config();

// require bodyparser
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body

// 3000 port is neded
const PORT = process.env.PORT || 3000;

// Import the router files
const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.use('/user', userRoutes);
app.use('/candidate', candidateRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})