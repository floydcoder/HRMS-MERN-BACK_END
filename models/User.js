const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // username: {
  //   type: String,
  //   required: [true, 'Username is required'],
  //   minLength: [1, 'Must be at least 1 character'],
  //   maxLength: [100, ''],
  //   email: true,
  //   unique: true,
  // },
  email: {
    type: String,
    email: true,
    required: 'Email is required',
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
    maxLength: 300,
  },
  // roles: {
  //   User: {
  //     type: Number,
  //     default: 5150,
  //   },
  // Editor: Number,
  // Admin: Number,
  // },
  refreshToken: String,
});

const User = mongoose.model('User', userSchema);
console.log('Printed even when imported');
module.exports = User;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   roles: {
//     User: {
//       type: Number,
//       default: 2001,
//     },
//     Editor: Number,
//     Admin: Number,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   refreshToken: String,
// });

// module.exports = mongoose.model('User', userSchema);
