const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const questions = require('./question')
// Import and require mysql2
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



let question = 1;

const prompt = async function(){
  while (question !== 'done') {
    console.clear();
    if(question == 1){
      
      const answer = await questions.mainQuestion();
      console.clear();

    }
  }
}

prompt();



  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  

