const mongoose = require('mongoose');
const Employee = require('./models/Employee'); // Update the path to your Employee model file

mongoose.connect('mongodb://localhost/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        const allEmployees = await Employee.find({});
        console.log('All Employees:', allEmployees);
    } catch (error) {
        console.error('Error fetching employees:', error);
    } finally {
        mongoose.connection.close();
    }
});
