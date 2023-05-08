const inquirer = require('inquirer');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'varroot',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

inquirer.
prompt([
  {
    type: 'select',
    message: 'What do you want ot do?',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    name: 'main_choice'
  },
])
.then((response) =>{
  switch (response.main_choice) {
    case 'view all departments':
      db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
      });
      break;
  
    default:
      break;
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
