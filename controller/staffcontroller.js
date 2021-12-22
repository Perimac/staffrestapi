const staffmodel = require("../model/staffmodel");

function createStaff(req, res) {
  staffmodel
    .create(req.body)
    .then(function (data) {
      res.status(200).json({ success: true, message: "Staff created" });
    })
    .catch(function (error) {
      res.status(401).json("Staff Creation Error" + error.message);
    });
}

async function getStaff(req, res) {
  try {
    const data = await staffmodel.find({});
    res.status(200).json({ success: true, message: data });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
}

async function getStaffById(req, res) {
  try {
    const id = req.params.id;
    const data = await staffmodel.findById(id);
    res.status(201).json({ success: true, message: "staff found", data: data });
  } catch (error) {
    res.status(401).json({ success: false, message: "staff does not exit" });
  }
}

//Getting All Staff on PayRoll
async function getStaffByPayRoll(req, res) {
  try {
    const data = await staffmodel.find({ isOnPayroll: true }).exec();
    if (data.length == 0) {
      res.status(200).json({ message: "No such satff available" });
    } else {
      res.status(200).json({ success: true, data: data});
    }
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Cant get staff" + error.message });
  }
}

//Updating a Specific Field
async function updateStaff(req, res) {
  try {
    const id = req.params.id;
    const { name, role, contact, isOnPayroll } = req.body;
    await staffmodel
      .findByIdAndUpdate(id, {
        name: name,
        role: role,
        contact: contact,
        isOnPayroll: isOnPayroll,
      })
      .exec();
    res.status(200).json({ success: true, message: "Staff Updated" });
  } catch (error) {
    res.status(401).json({ success: false, message: +error.message });
  }
}

module.exports = {
  createStaff,
  getStaff,
  getStaffById,
  getStaffByPayRoll,
  updateStaff,
};
