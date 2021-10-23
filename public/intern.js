const Employee = require('./employee');

class Intern extends Employee {
  
    constructor(empName, empId, email, school) {
      super(empName, empId, email);
      this.school = school;
    }

    getSchool(){
      return this.school;
        
      }

      getRole(){
        return "intern";
      }
}

module.exports = Intern;

  