const express = require('express');
const app = express();
const cokieParser = require('cookie-parser');
const route = require('./routes/router');
const bodyParser = require('body-parser');
// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cokieParser());

// mount the router
app.use('/api/auth',route);
const db = require('./config/db');
require('dotenv').config();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send(`Server is running on port ${port}`);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});