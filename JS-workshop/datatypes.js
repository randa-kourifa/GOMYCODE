/*
- var, let, const
- string , concatenation, length, uppercase
- numbers, math, round, ceil, floor
- arrays, array methods, add to array, remove from array , indexof, splice, slice, reverse
- objects, object literals, object methods (this), OOP
*/

// var (old way of declaring variables)
var formation = "fullstack";

// const (constant) 
const email = "example@gmail.com";

// let (block scope)
let name = "hamza";

// Boolean
var isonline = true;
console.log(typeof isonline);

// string


// concatenation of strings

const firstName = "hamza";
const secondname = "Chebbah";
const resulat = firstName + " " + secondname;
console.log(resulat); //hamzachebbah 
console.log(typeof resulat); // string

// length (longueur de la chaine de caractere)
console.log(firstName.length); //5

// uppercase (mettre en majuscule)
console.log(firstName.toUpperCase()); //HAMZA

//numbers
const a = 40;
const b = 2.432;
const r = a + b;
console.log(r); // 42.432


// math
const pi = Math.PI;
console.log(pi); // 3.141592653589793

// round (arrondir)
const num = Math.round(2.4); //2
const num2 = Math.round(2.5); //3
const num3 = Math.round(-2.4); //-2

// ceil (arrondir vers le haut)
const Num = Math.ceil(2.4); //3
const Num2 = Math.ceil(2.5); //3
const Num3 = Math.ceil(-2.4); //-2

// floor (arrondir vers le bas)
const NUM = Math.floor(2.4); //2
const NUM2 = Math.floor(2.5); //2
const NUM3 = Math.floor(-2.4); //-3

// --------------------------- Arrays ---------------------------
// arrays (tableau)
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

const mixed = ["apple", 1, true, null, undefined];
console.log(mixed);

// array methods
console.log(fruits.length); //3
console.log(fruits[0]); // apple
console.log(fruits[1]); // orange

// add to array to the end
fruits.push("strawberry");
console.log(fruits); // ["apple", "orange", "banana", "strawberry"]


// remove last element from array
fruits.pop();
console.log(fruits); // ["apple", "orange", "banana"]


// add to array to the beginning
fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "apple", "orange", "banana"]

// remove first element from array
fruits.shift();
console.log(fruits); // ["apple", "orange", "banana"]


// indexof (retourne l'index de l'element)
console.log(fruits.indexOf("orange")); //1

// splice (supprimer un element du tableau)
fruits.splice(1, 1);
console.log(fruits); //["apple", "banana"]

// splice many elements (supprimer plusieurs elements du tableau)
fruits = ["apple", "orange", "banana", "strawberry"];
var newarr2 = fruits.splice(1, 2);

console.log(fruits); // ["apple", "strawberry"]

// slice (copier une partie d'un tableau)
fruits = ["apple", "orange", "banana", "strawberry"];
const newarr = fruits.slice(1, 3);
console.log(newarr); // ["orange", "banana"]
console.log(fruits) //["apple", "orange", "banana", "strawberry"]

// reverse (inverser un tableau)
fruits.reverse();
console.log(fruits); //["strawberry", "banana", "orange", "apple"]



// ---------------------------- Objects ------------------------------
const person = {
    firstName: "hamza", // string
    lastName: "Chebbah",
    age: 20, // number
    hobbies: ["music", "movies", "sports", ], // array
    address: { // objet inside objet
        city: "tunis",
        street: "rue 1"
    }
};

// get elemtents from object
console.log(person.firstName) // hamza
console.log(person.hobbies[1]); // movies
console.log(person.address.city); // tunis

// add property to object
person.email = "";

// array of objects
const todos = [{
        id: 1,
        text: "take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "dentist appt",
        isCompleted: false
    }
];

// get elements from array of objects
console.log(todos[1].text); // meeting with boss


// object literals
const human = {
    firstName: "hamza",
    lastName: "Chebbah",
    age: 20,
    hobbies: ["music", "movies", "sports"],
    address: {
        city: "tunis",
        street: "rue 1"
    },
    getBirthYear: function() {
        return 2020 - this.age;
    }
};

console.log(human.getBirthYear()); //2000