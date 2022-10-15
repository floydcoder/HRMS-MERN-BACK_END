const express = require('express');
const db = require('./config/db_connect');

const app = express();

// middlewares

// setup routes

const start = () => {
  db.once('open', () => {
    console.log('Connected to DB');
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  });
};

start();
