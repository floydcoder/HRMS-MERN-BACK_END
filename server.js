const express = require('express');
const db = require('./config/db_connect');
// const Employee = require('./models/Employee');
// const User = require('./models/Users');
const userRoutes = require('./routes/users');
const employeeRoutes = require('./routes/employee');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup routes
app.use('/api/user', userRoutes);
app.use('/api/emp', employeeRoutes);

app.route('/').get((req, res) => {
  return res.send('<h1> MogoDB + Mongoose Example</h1>');
});

const start = () => {
  db.once('open', () => {
    console.log('Connected to DB');
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  });
};

start();
