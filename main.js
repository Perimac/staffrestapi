require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const staffRoute = require('./routes/staffroute');
const staffController = require('./controller/staffcontroller');
const port = process.env.PORT || 4000;
const server = express();

server.use(express.json());

server.listen(port,function(){
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('GTL DB Connected');
        server.post('/staff',staffController.createStaff);
        server.get('/staffs',staffController.getStaff);
        server.get('/staff/:id',staffController.getStaffById);
        
    }).catch(err => console.error(err.message));
});