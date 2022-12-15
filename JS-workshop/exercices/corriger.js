//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a 
// triangle (area = 0.5 x b x h).
var base = prompt("Enter base of the triangle");
var height = prompt("Enter height of the triangle");
var area = 0.5 * parseInt(base) * parseInt(height);
alert("The area of the triangle is " + area);
// we can also use parseFloat to instead of parseInt
// to accept decimal numbers
// ex: parseFloat("2.5") => 2.5 intead of 2 with parseInt

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate
// the perimeter of triangle (perimeter = a + b + c).
var sideA = prompt("Enter side a of the triangle");
var sideB = prompt("Enter side b of the triangle");
var sideC = prompt("Enter side c of the triangle");
var resulat = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
alert("The perimeter of the triangle is " + resulat);

//Get length and width using prompt and calculate an area of rectangle (area = length x width) and the perimeter
// of rectangle (perimeter = 2 x (length + width)).
var length = parseInt(prompt("Enter length of the rectangle"))
var width = parseInt(prompt("Enter width of the rectangle"))
var area = length * width;
var perimeter = 2 * (length + width);
alert("The area of the rectangle is " + area);
alert("The perimeter of the rectangle is " + perimeter);


// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle
// (circumference = 2 x pi x r) where pi = 3.14.
var radius = parseInt(prompt("Enter radius of the circle"))
var area = 3.14 * radius * radius;
var circumference = 2 * 3.14 * radius;
alert("The area of the circle is " + area);
alert("The circumference of the circle is " + circumference);


/*
- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to 
  drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

*/
var age = parseInt(prompt("Enter your age"));
if (age >= 18) {
    alert("You are old enough to drive");
} else {
    alert("You are left with " + (18 - age) + " years to drive");
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console 
//  stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

var myAge = 25;
var yourAge = parseInt(prompt("Enter your age"));
if (myAge > yourAge) {
    console.log("I am older than you");
} else if (myAge < yourAge) {
    console.log("You are older than me");
} else {
    console.log("We are the same age");
}

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not ?

var num = parseInt(prompt("Enter a number"));
if (num % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// Write a code which can give grades to students according to theirs scores:

// using switch statement

var score = parseInt(prompt("Enter your score"));
switch (score) {
    case (score >= 90 && score <= 100):
        console.log("A");
        break;
    case (score >= 70 && score <= 89):
        console.log("B");
        break;
    case (score >= 60 && score <= 69):
        console.log("C");
        break;
    case (score >= 50 && score <= 59):
        console.log("D");
        break;
    case (score >= 0 && score <= 49):
        console.log("F");
        break;
    default:
        console.log("Invalid score");
        break;
}

// using if else
var score = prompt("Enter your score");
if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 70 && score <= 89) {
    console.log("B");
} else if (score >= 60 && score <= 69) {
    console.log("C");
} else if (score >= 50 && score <= 59) {
    console.log("D");
} else if (score >= 0 && score <= 49) {
    console.log("F");
} else {
    console.log("Invalid score");
}




/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  September, October or November, the season is Autumn.
  December, January or February, the season is Winter.
  March, April or May, the season is Spring
  June, July or August, the season is Summer
*/

var month = prompt("Enter a month");
if (month == "September" || month == "October" || month == "November") {
    console.log("The season is Autumn");
} else if (month == "December" || month == "January" || month == "February") {
    console.log("The season is Winter");
} else if (month == "March" || month == "April" || month == "May") {
    console.log("The season is Spring");
} else if (month == "June" || month == "July" || month == "August") {
    console.log("The season is Summer");
} else {
    console.log("Invalid month");
}
// ----------- EXO 5 -------------
//- Declare an empty array.
var arr = [];

// Declare an array with more than 5 number of elements.
var arr = [1, 2, 3, 4, 5, 6];


//Find the length of your array.
console.log(arr.length);

//Get the first item, the middle item and the last item of the array.
console.log(arr[0]);
console.log(arr[Math.floor(arr.length / 2)]);
console.log(arr[arr.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array,
//  the array size should be greater than 5.
var mixedDataTypes = [1, "hello", true, { username: hamza }, null, undefined];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, 
//  Oracle and Amazon.
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Print the array using console.log().
console.log(itCompanies);

// Print the number of companies in the array.
console.log(itCompanies.length);

// Print the first company, middle and last company.
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// -------------- EXO 6 --------------
// Iterate 0 to 10 using for loop,
// do the same using while and do while loop.
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (var i = 0; i <= 10; i++) {
    console.log(i + " x " + i + " = " + i * i);
}

// Use for loop to iterate from 0 to 100 and print only even numbers.
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers.
for (var i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Use for loop to iterate from 0 to 100
// and print the sum of all numbers.
var sum = 0;
for (var i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//using while loop
var sum = 0;
var i = 0;
while (i <= 100) {
    sum += i;
    i++;
}
console.log(sum);

// Use for loop to iterate from 0 to 100 and
// print the sum of all evens and the sum of all odds.
var sumEven = 0;
var sumOdd = 0;
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log("Sum of even numbers: " + sumEven);
console.log("Sum of odd numbers: " + sumOdd);

// Using the countries array, create an array for countries length'.
var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

var countriesLength = [];
for (var i = 0; i < countries.length; i++) {
    countriesLength.push(countries[i].length);
}

console.log(countriesLength);

// Use the countries array to create the following array of arrays:
// [
//   ['Albania', 'ALB' ],
//   ['Bolivia', 'BOL'],
//   ['Canada', 'CAN'],
//   ['Denmark', 'DEN'],
//   ['Ethiopia', 'ETH'],
//   ['Finland', 'FIN'],
//   ['Germany', 'GER'],
//   ['Hungary', 'HUN'],
//   ['Ireland', 'IRE'],
//   ['Japan', 'JAP'],
//   ['Kenya', 'KEN']
// ]

var newarr = []
for (let i = 0; i < countries.length; i++) {
    newarr.push([countries[i], countries[i].substring(0, 3).toLocaleUpperCase()])
}
console.log(newarr)

// ------------ EXO 7 -----------
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

// exercice calucate BMI
function calculatebmi(weight, height) {
    return weight / (height * height);
}

function bmiStatus(weight, height) {
    var bmi = calculatebmi(weight, height);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}