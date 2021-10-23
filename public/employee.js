class Employee {
  constructor(empName, empId, email) {
    this.empName = empName;
    this.empId = empId;
    this.email = email;
  }

  printInfo() {
    console.log(`Name: ${this.empName}`);
    console.log(`Employee ID: ${this.empId}`);
    console.log(`Email: ${this.empId}`);
  }
  getName(){
  return this.empName;
  }
  getId(){
    return this.empId;
  }
  getEmail(){
    return this.email;
  }
  getRole(){
    return 'Employee'
  }
}

module.exports = Employee;
