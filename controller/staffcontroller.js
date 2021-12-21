const staffmodel = require('../model/staffmodel');

function createStaff(req, res) {
    staffmodel.create(req.body)
   .then(function(data){
       res.status(200).json({success:true, message:'Staff created',data:data});
    })
    .catch(function(error){
        res.status(401).json('Staff Creation Error' +error.message);
    });
}

async function getStaff(req, res){
    try {
        const data = await staffmodel.find({});
        res.status(200).json({success: true, message: data})
    } catch (error) {
        res.status(404).json({message:error.message,success:false})
    }
}

async function getStaffById(req, res) {
    try {
        const id = req.params.id;
        const data = await staffmodel.findById(id);
        res.status(201).json({success:true,message:'staff found',data:data});
    } catch (error) {
        res.status(401).json({success:false,message:'staff does not exit'});
    }
}

//Getting All Staff on PayRoll
async function getPayRollStaff(req, res){
    try {
        const id = req.params.id;
        const {isOnPayroll} = req.query.isOnPayroll;
        const data = await staffmodel.findById(id,{isOnPayroll:isOnPayroll})
        res.status(201).json({success:true,message:'staff found',data:data});
    } catch (error) {
        res.status(401).json({success:false,message:'staff does not exit'});
    }
}

async function updateStaff(req, res) {
    try {
        
    } catch (error) {
        
    }
}


module.exports = {createStaff, getStaff, getStaffById,getPayRollStaff};