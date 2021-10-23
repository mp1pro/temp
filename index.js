let inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

const Employee = require("./public/employee")
const Manager = require("./public/manager");
const Engineer = require("./public/engineer");
const Intern = require("./public/intern");

const render = require("./public/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "./dist");
const outputPath = path.join(OUTPUT_DIR, "teamProfile.html");

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
  console.log('team',team);
  let html = render(team);
  console.log('html',html);
  if(html){
    console.log('Try', typeof z);
    renderHTML(html);
  }

}

function renderHTML(html){
  console.log('Trying');
  if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR);
    fs.appendFile(outputPath, html, function (err) {
      if (err) throw err;
      console.log('Success!');
    });
  }else{
    fs.appendFile(outputPath, html, function (err) {
      if (err) throw err;
      console.log('Success!');
    });
  }
}

createTeam();

