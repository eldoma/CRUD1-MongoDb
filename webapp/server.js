//CRUD/webapp/server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});


// server.js

const employeeRoutes = require('./routes/employee');

 app.use(employeeRoutes);
 app.use(express.static('public'));

 app.get('/', (req, res) => {
     res.send('Welcome to the Employee Management System');
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
