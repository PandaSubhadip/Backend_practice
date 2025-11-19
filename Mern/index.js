const express = require('express');
const app = express();

const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require('./db');
const routes = require('./route');

app.use('/api',routes);



app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`);
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");

})