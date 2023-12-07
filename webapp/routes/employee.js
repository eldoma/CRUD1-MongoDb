//CRUD/webapp/routes/employee.js

const express = require('express');
const router = express.Router();

const Employee = require('../models/Employee');


// Create
router.post('/employee', (req, res) => {
    const employee = new Employee(req.body);

    employee.save()
        .then(() => res.status(201).send(employee))
        .catch((error) => res.status(400).send(error));
});

// Read
router.get('/employee', (req, res) => {
    Employee.find({})
        .then((employees) => res.send(employees))
        .catch((error) => res.status(500).send(error));
});

// Update
router.put('/employee/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedEmployee => {
            if (!updatedEmployee) {
                return res.status(404).send({ error: 'Employee not found' });
            }
            res.status(200).send(updatedEmployee);
        })
        .catch(error => res.status(500).send(error));
});


// Delete
router.delete('/employee/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(deletedEmployee => {
            if (!deletedEmployee) {
                return res.status(404).send({ error: 'Employee not found' });
            }
            res.status(200).send(deletedEmployee);
        })
        .catch(error => res.status(500).send(error));
});


module.exports = router;


