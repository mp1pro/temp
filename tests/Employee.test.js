const Employee = require('../public/employee')

test('Should instantiate an employee class.', () => {
const employee = new Employee();
expect (typeof(employee)).toBe('object')
})

test('Should instantiate an employee name.', () => {
  var name = 'Justin';
  const employee = new Employee(name);
  expect (employee.empName).toBe(name)
  })

  test('Should instantiate an employee Id.', () => {
    var newId = 7;
    const employee = new Employee('Justin',newId);
    expect (employee.empId).toBe(newId)
  })

  test('Should instantiate an employee email.', () => {
    const testEmail = 'useremail@email.com';
    const employee = new Employee('Justin', 16, testEmail);
    expect (employee.email).toBe(testEmail)
  })

  test('Should instantiate an employee name.', () => {
    var name = 'Justin';
    const employee = new Employee(name);
    expect (employee.getName()).toBe(name)
    })

    test('Should instantiate an employee Id.', () => {
      var newId = 7;
      const employee = new Employee('Justin',newId);
      expect (employee.getId()).toBe(newId)
    })

  test('Should instantiate an employee email.', () => {
    const testEmail = 'useremail@email.com';
    const employee = new Employee('Justin', 16, testEmail);
    expect (employee.getEmail()).toBe(testEmail)
  })
