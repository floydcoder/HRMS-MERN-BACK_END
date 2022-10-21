/*

User Routing:


*/

const express = require('express');
const EmployeeModel = require('../models/Employee');

const router = express.Router();

/*
POST -> /api/emp/employees -> RESPONSE CODE 201 -> User creates new employee
*/
router.post('/employees', async (req, res) => {
  try {
    const newEmployee = new EmployeeModel(req.body);
    await newEmployee.save();
    res
      .status(201)
      .json({ message: 'Employee Successfully Created', status: true });
  } catch (e) {
    res.status(409).json({ message: e });
  }
});

/*
GET -> /api/emp/employees -> RESPONSE CODE 200 -> User Retrieve all employee list
*/
router.get('/employees', async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).json(employees);
  } catch (e) {
    res.status(409).json({ message: e });
  }
});

/*
GET -> /api/emp/employees/{eid} -> RESPONSE CODE 200 -> Get employee details by ID
*/
router.get('/employees/:eid', async (req, res) => {
  try {
    const empId = await EmployeeModel.findById(req.params.eid);
    if (!empId) {
      res.status(400).json({ message: 'The Employee does not exist' });
    }
    res.status(200).json({ ID: empId });
  } catch (e) {
    res.status(400).json(e);
  }
});

/*
PUT -> /api/emp/employees/{eid} -> RESPONSE CODE 200 -> User Updates employee detail
 */

router.put('/employees/:eid', async (req, res) => {
  try {
    const updateEmployee = await EmployeeModel.findByIdAndUpdate(
      req.params.eid,
      req.body
    );
    res.status(200).json({ message: 'The Employee has been updated' });
  } catch (e) {
    res.status(400).json(e);
  }
});

/*
DELETE -> /api/emp/employees?eid='the id of the employee' -> RESPONSE CODE 204 -> delete employee by its id
*/
router.delete('/employees', async (req, res) => {
  try {
    console.log(req.query.id);
    const deleteEmployee = await EmployeeModel.findByIdAndDelete(req.query.id);
    if (!deleteEmployee) {
      res.status(400).json({ message: 'No Employee to Delete' });
    }
    res.status(204).json({ message: 'The employee has been deleted' });
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
