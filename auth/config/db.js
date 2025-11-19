const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
    console.log('Database connected successfully');
}).catch(err => {
    console.error('Database connection error:', err);
});