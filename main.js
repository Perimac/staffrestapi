require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const staffController = require('./controller/staffcontroller');
// const port = process.env.PORT || 4000;
const localport = 4000;
const server = express();

server.use(express.json());

server.post('/staff',staffController.createStaff);
server.get('/allstaff',staffController.getStaff);
server.get('/staff/:id',staffController.getStaffById);
server.get('/payrol',staffController.getStaffByPayRoll);
server.put('/ustaff/:id',staffController.updateStaff);

server.listen(localport,function(){
    mongoose.connect(process.env.ATLAS_URL)
    .then(function(){
        console.log('ATLAS Connected');
    }).catch(err => console.error(err.message));
});