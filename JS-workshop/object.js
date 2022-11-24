// create an empty object named dog
var dog = {};
// Print the dog object on the console
console.log(dog);

// Add name, legs, color and age properties for the dog object.
dog.name = "Bobby";
dog.legs = 4;
dog.color = "black";
dog.age = 5;

// Get name, legs, color and age value from the dog object.
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);

// Set new properties the dog object: breed.
dog.breed = "Labrador";



var users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    isLoggedIn: true,
    points: 50
  }
}
//find the user who has the most skills
var maxSkills = 0;
var maxSkillsUser = "";
for (var user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    maxSkillsUser = user;
  }
}
console.log(maxSkillsUser);

// Declare a function fullName and it print out your full name.

function fullName(firstName, lastName) {
  console.log(fullName("John", "Doe"));
}


// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full name.

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName("John", "Doe"));

// Declare a function addNumbers and it takes two parameters and it returns sum.

function addNumbers(num1, num2) {
  return num1 + num2;
}
// A perimeter of a rectangle is calculated as follows: perimeter = 2x(length + width).Write a function which 
//  calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

// A volume of a rectangular prism is calculated as follows: volume = length x width x height.Write a function
//  which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}




