const Engineer = require('../public/engineer')
const Employee = require('../public/employee')


test('Should instantiate an engineers github.', () => {
  var empGithub = "userGithub";
  const engineer = new Engineer("Justin", 7, "myemail@email.com", "userGithub");
  expect (engineer.github).toEqual(empGithub)
})

