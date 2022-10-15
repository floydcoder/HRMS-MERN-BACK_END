const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minLength: [1, 'Must be at least 1 character'],
    maxLength: [100, ''],
    unique: true,
  },
  email: {
    type: String,
    required: 'Email is required',
    email: true,
    unique: true,
    minlength: 1,
    maxlength: 50,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'email does not match email rules',
    ],
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
  },
});

const User = mongoose.model('User', userSchema);
User.create({ username: 'asdasdsa', email: 'ab.ca', password: '123456' }).then(
  (u) => console.log(u)
);

//
console.log('Printed even when imported');
module.exports = User;
