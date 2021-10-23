const Employee = require('./employee');

class Engineer extends Employee {
  
    constructor(empName, empId, email, github) {
      super(empName, empId, email);
      this.github = github;
    }

    getGitHub(){
      return this.github;
       
      }

      getRole(){
        return "engineer"
      }
}

module.exports = Engineer





