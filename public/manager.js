const Employee = require('./employee');

class Manager extends Employee {
  
    constructor(empName, empId, email, officeNumber) {
      super(empName, empId, email);
      this.officeNumber = officeNumber;
    }

    getRole(){
      return 'Manager';
      
    }
    getOfficeNumber(){
     return this.officeNumber;
    
    }
}

module.exports = Manager