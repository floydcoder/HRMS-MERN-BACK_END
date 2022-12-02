const Employee = require('../models/Employee');

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if (!employees)
    return res.status(204).json({ message: 'No employees found.' });
  res.json(employees);
};

const createNewEmployee = async (req, res) => {
  if (!req?.body?.firstname || !req?.body?.lastname) {
    return res
      .status(400)
      .json({ message: 'First and last names are required' });
  }

  try {
    const result = await Employee.create({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email,
      gender: req.body.gender,
      salary: req.body.salary,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateEmployee = async (req, res) => {
  // console.log(req);
  if (!req?.body?.id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  const employee = await Employee.findOne({ _id: req.body.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `No employee matches ID ${req.body.id}.` });
  }
  if (req.body?.firstname) employee.first_name = req.body.firstname;
  if (req.body?.lastname) employee.last_name = req.body.lastname;
  if (req.body?.email) employee.email = req.body.email;
  if (req.body?.gender) employee.gender = req.body.gender;
  if (req.body?.salary) employee.salary = req.body.salary;
  const result = await employee.save();
  res.json(result);
};

const deleteEmployee = async (req, res) => {
  console.log(req.body.id);
  if (!req?.body?.id)
    return res.status(400).json({ message: 'Employee ID required.' });

  const employee = await Employee.findOne({ _id: req.body.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `No employee matches ID ${req.body.id}.` });
  }
  const result = await employee.deleteOne(); //{ _id: req.body.id }
  res.json(result);
};

const getEmployee = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: 'Employee ID required.' });

  const employee = await Employee.findOne({ _id: req.params.id }).exec();
  if (!employee) {
    return res
      .status(204)
      .json({ message: `No employee matches ID ${req.params.id}.` });
  }
  res.json(employee);
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
