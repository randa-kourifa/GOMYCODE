// try catch block
try {
    // code
    console.log("Trying to execute some code")
    unknownFunction() // this line will throw an error
    console.log("after error")
} catch (error) {
    // code
    console.log("Error occured", error)
}

// ----------------------- functions ----------------------

// function declaration
function add(a, b) {
    console.log("before return")
    return a + b
    console.log("after return")
}
var results = add(5, 6)
console.log(results)

function One() {
    console.log("hello first")
}

function two() {
    console.log("hello second")
    One()
}

function three() {
    console.log("hello three")
    two()
    console.log("hello three after call")
}
three()