/*

User Routing:

  1) POST -> api/user/signup -> RESPONSE CODE 201 -> User Creates New Account
  2) POST -> api/user/login ->  RESPONSE CODE 200 -> User Accesses the system

  SAMPLES REQUEST AND RESPONSE

  ERROR RESPONSE -> User credential are wrong
  {
    "status": false,
    "message": "invalid username and password"
  }

  USER REQUEST -> User Credential, username and password
  {
    "username": "david",
    "email": "david@outolook.com",
    "password": "password$123"
  }

 */
const express = require('express');
const UserModel = require('../models/Users');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(201).json({ message: 'Successfully Created', status: true });
  } catch (e) {
    res.status(409).json({ message: e });
  }
});

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await UserModel.findOne({
    username: username,
    password: password,
  });
  if (!user) {
    return res
      .status(401)
      .json({ message: 'Wrong Username Or Password', status: false });
  }
  return res.status(200).json({
    message: `${user.username} Successfully Logged In`,
    status: true,
  });
});

module.exports = router;
