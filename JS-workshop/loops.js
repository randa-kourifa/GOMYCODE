// ---------------------------- Loops ------------------------------
// for loop
for (let i = 0; i < 10; i++) { // i++ is the same as i = i + 1
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

// while loop
let i = 0;
while (i < 10) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    i++;
}

// loop through array
var countries = ["algerie", "allemagne", "espagne", "england", "italie"];
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]); // algerie, allemagne, espagne, england, italie
}

// loop through array with for of
for (let countrie of countries) {
    console.log(countrie); //same as above (meme que ci dessus)
}

// loop in object
var person = {
    name: "hamza",
    age: 20,
    country: "algerie"
}
for (let key in person) {
    console.log(key); // name, age, country
    console.log(person[key]); // hamza, 20, algerie
}
console.log(key) // Error: key is not defined (key is not defined outside the loop)


// do while loop
let j = 11;
do {
    console.log(j); // 11
    j++; // 12
} while (j < 10); // false --> exit the loop (quitte la boucle)



// difference between for vs while loop
// for loop is used when you know how many times you want to loop
// while loop is used when you don't know how many times you want to loop
// do while loop is used when you want to loop at least once
//