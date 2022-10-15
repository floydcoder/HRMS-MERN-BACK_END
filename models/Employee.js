const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  first_name: {
    require: 'First Name is required',
    type: String,
    minLength: 1,
    maxLength: 100,
    match: /^[a-z ,.'-]+$/i,
  },
  last_name: {
    require: 'Last Name is required',
    type: String,
    minLength: 1,
    maxLength: 50,
    match: /^[a-z ,.'-]+$/i,
  },
  email: {
    type: String,
    required: 'Email is required',
    email: true,
    unique: true,
    minlength: 1,
    maxlength: 50,
    match:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  gender: {
    type: String,
    minlength: 1,
    maxlength: 25,
    enum: ['Male', 'Female', 'Other'],
  },
  salary: {
    type: Number,
    required: 'Salary is required',
    set: function (v) {
      return Math.round(v * 100) / 100;
    },
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

// SQL Table == NoSQL Collection
// SQL Record == NoSQL Document

module.exports = Employee;
