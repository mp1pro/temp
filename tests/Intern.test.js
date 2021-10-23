const Intern = require('../public/intern')
const Employee = require('../public/employee')


test('Should instantiate an engineers github.', () => {
  var userSchool = "University of MN";
  const intern = new Intern("Justin", 7, "myemail@email.com", "University of MN");
  expect (intern.school).toEqual(userSchool)
})
