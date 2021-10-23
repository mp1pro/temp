let inquirer = require('inquirer');
const fs = require("fs");

const Employee = require("./public/employee")
const Manager = require("./public/manager");
const Engineer = require("./public/engineer");
const Intern = require("./public/intern");

let team = [];

function createTeam(){
inquirer.prompt([
  {
    type: "list",
    message: "Please select the role you would like to add to your team.",
    name: "role",
    choices: ["Manager", "Engineer", "Intern", "Finish"],
  
  }
]) .then(function(data){
  const selection = data.role;
  if (selection === "Manager"){
    
    addManager();
  }
    if (selection === "Engineer"){
      addEngineer();
      
    }
    if (selection === "Intern"){
      addIntern();
      
    }
    if (selection === "Finish"){
      generateHTML(team)
      
    }
  
  })
}

function addManager(){
  inquirer.prompt([  
    {
    type: "input",
    message: "What is the name of the Manager?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Managers assigned ID number?",
    name: "idNumber",
  },
  {
    type: "input",
    message: "What is the Managers email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Managers office number?",
    name: "officeNumber",
  },
  ]) .then((response) =>{
    let manager = new Manager(response.name, response.idNumber, response.email, response.officeNumber)
    team.push(manager);
    console.log(manager);
    createTeam();
  })

}

function addEngineer(){
  inquirer.prompt([  
    {
    type: "input",
    message: "What is the name of the employee?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employees assigned ID number?",
    name: "idNumber",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's github?",
    name: "github",
  },
  ]) .then((response) =>{
    let engineer = new Engineer(response.name, response.idNumber, response.email, response.github)
    team.push(engineer);
    console.log(engineer);
    createTeam();
  })

}

function addIntern(){
  inquirer.prompt([  
    {
    type: "input",
    message: "What is the name of the employee?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employees assigned ID number?",
    name: "idNumber",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "input",
    message: "Where does the Intern go to school?",
    name: "school",
  },
  ]) .then((response) =>{
    let intern = new Intern(response.name, response.idNumber, response.email, response.school)
    team.push(intern);
    console.log(intern);
    createTeam();
  })

}
function generateHTML(team){
  const teamProfile= `

  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="./assets/style.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<title></title>
</head>
<body>

<div>  
    <ul>  
      <li id= 'manager'> ${team.manager}</li>
      <li id= 'engineer'> ${team.engineer}</li>
      <li id= 'intern'>${team.intern} </li>
    </ul>
</div>







<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="./assets/script.js"></script>
</body>
</html> `

    return fs.writeFile("teamProfile.html ", teamProfile, (err) => {
    err ? console.log("Big trouble my dude!") : console.log("Cool beans!");
  
});
console.log("Hello", team)
}

createTeam();

