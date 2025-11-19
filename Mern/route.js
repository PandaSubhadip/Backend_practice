const express = require('express');
const router = express.Router();
const {createTodo} = require('./controler');
const {getTodos} = require('./controler');
const {getbyid} = require('./controler');
const {updateTodo} = require('./controler');
const {DeleteTodo} = require('./controler');

router.post('/todo',createTodo);
router.get('/fetch',getTodos);
router.put('/getid/:id',getbyid);
router.put('/update/:id',updateTodo);
router.delete('/todo/:id', DeleteTodo);



module.exports = router;