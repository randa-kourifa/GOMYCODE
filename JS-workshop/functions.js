// try catch block
try {
    // code
    console.log("Trying to execute some code")
    throw new Error("Something went wrong")
} catch (error) {
    // code
    console.log("Error occured", error)
}

// ----------------------- functions ----------------------

// function declaration
function add(a, b) {
    return a + b
}
console.log(add(5, 6)) // 11

// function expression same as above
// but we can't call the function before it's declared

var addNumbers = function(a, b) {
    return a + b
}
console.log(addNumbers(5, 6)) // 11