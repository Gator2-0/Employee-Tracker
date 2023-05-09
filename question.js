const inquirer = require('inquirer');
const mysql = require('mysql2');
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

async function mainQuestion () { 
  const prompt = await inquirer.prompt({
    type: 'list',
    message: 'What do you want to do?',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    name: 'answer',
  })
  switch (prompt.answer) {
    case 'view all departments':
      db.query('SELECT * FROM departments', function (err, results) {
        console.log(' ')
        console.table(results);
      });
      break;
    case 'view all roles':
      db.query('SELECT * FROM roles', function (err, results) {
        console.log(' ')
        console.table(results);
      });
      break;
    case 'view all employees':
      db.query('SELECT * FROM employees', function (err, results) {
        console.log(' ')
        console.table(results);
      });
      break;

    case 'add a department':
      await addDept()
    
      break;
    case 'add a role':
      db.query('SELECT * FROM roles', function (err, results) {
        console.log(' ')
        console.table(results);
      });
      break;
    case 'add an employee':
    db.query('SELECT * FROM roles', function (err, results) {
      console.log(' ')
      console.table(results);
    });
    break;
    case 'update an employee role':
      db.query('SELECT * FROM roles', function (err, results) {
        console.log(' ')
        console.table(results);
      });
      break; 

    
  }
  
}

async function addDept(){
  const answer = await inquirer.prompt([
    {
      type: 'input',
      message:'What is the name of the new department?',
      name: 'deptName',
    }
  ])
  console.log(answer.deptName);
  db.query(`INSERT INTO departments(name) VALUES ("${answer.deptName}")`);
  
}



module.exports = {mainQuestion , addDept};