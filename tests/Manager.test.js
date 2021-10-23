const Manager = require('../public/manager')

test('Should instantiate managers office number.', () => {
  var newOffNum = 101;
  const manager = new Manager("Justin", 7, "myemail@email.com", 101);
  expect (manager.officeNumber).toEqual(newOffNum)
})