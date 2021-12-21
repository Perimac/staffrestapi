require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const staffRoute = require('./routes/staffroute');
const staffController = require('./controller/staffcontroller');

const server = express();

server.use(express.json());

server.listen(2200,function(){
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('GTL DB Connected');
        // server.get('/staff',staffController.createStaff);
        server.post('/staff',staffController.createStaff);
        server.get('/staffs',staffController.getStaff);
        // server.use('/staff',staffRoute);
    }).catch(err => console.error(err.message));
});