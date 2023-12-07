//CRUD/webapp/app.js

// Get form elements
const createForm = document.getElementById('create-form');
const updateForm = document.getElementById('update-form');
const deleteForm = document.getElementById('delete-form');

// Get button and employee list elements
const readButton = document.getElementById('read-button');
const employeeList = document.getElementById('employee-list');

// Handle create employee form submission
createForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const formData = new FormData(createForm);

    // Send POST request to server with form values
    fetch('/employee', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle server response
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
});

// Handle update employee form submission
updateForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const formData = new FormData(updateForm);
    const id = formData.get('id');

    // Send PUT request to server with form values
    fetch(`/employee/${id}`, {
        method: 'PUT',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        // Handle server response
        console.log(response.status);
    })
    .catch(error => console.error('Error:', error));
});

// Handle delete employee form submission
deleteForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const formData = new FormData(deleteForm);
    const id = formData.get('id');

    // Send DELETE request to server with form values
    fetch(`/employee/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        // Handle server response
        console.log(response.status);
    })
    .catch(error => console.error('Error:', error));
});

// Handle read button click
readButton.addEventListener('click', function() {
    fetch('/employee')
    .then(response => response.json())
    .then(data => {
        // Clear the list
        employeeList.innerHTML = '';

        // Create and append new employee divs
        data.forEach(employee => {
            let employeeDiv = document.createElement('div');
            employeeDiv.textContent = `Name: ${employee.name}, Position: ${employee.position}, Office: ${employee.office}, Salary: ${employee.salary}`;
            employeeList.appendChild(employeeDiv);
        });
    })
    .catch(error => console.error('Error:', error));
});
