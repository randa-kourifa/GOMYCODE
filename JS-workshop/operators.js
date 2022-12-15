// - assignment operators (=, +=, -=, *=, /=, %=, **=)

// "=" is an assignment operator
// x+=y equivalent to x = x + y
// -= equivalent to x = x - y
/* *= equivalent to x = x * y */
// /= equivalent to x = x / y


// - comparison operators (==, ===, !=, !==, >, <, >=, <=)
// comparison operators return a boolean value (true or false)

// == is a comparison operator that checks for equality of value only
// === is a comparison operator that checks for equality of value and type
/* != is a comparison operator that checks for inequality of value only */
/* !== is a comparison operator that checks for inequality of value and type */


// - logical operators (&&, ||, !)
// && is a logical operator that returns true if both operands are true
// ex: (4 < 3) && (7 > 3)  ------> false because 4 < 3 is false
// || is a logical operator that returns true if one of the operands is true
// ex: (4 < 3) || (7 > 3)  ------> true because 7 > 3 is true
/* ! is a logical operator that returns the opposite of the operand */
// ex: !(4 < 3)  ------> true because 4 < 3 is false

// - conditionals, if, else, else if, switch
if (condition1) {
    // code to execute if condition1 is true

} else if (condition2) {
    // code to execute if condition2 is true

} else {
    // code to execute if condition 1 and 2 are false

}

// - ternary operator (condition ? exprIfTrue : condition2 ? fdfdsfds: exprIfFalse)
// ex:
var age = 18;
var canDrive = (age >= 18) ? "yes" : "no";
console.log(canDrive); // "yes"

//switch statement
switch (expression) {
    case value1:
        // code to execute if expression === value1

        break;
    case value2:
        // code to execute if expression === value2

        break;
    default:
        // code to execute if expression does not match any case
}

//ex:
var day = "Monday";
switch (day) {
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Monday":
        console.log("Today is Monday"); // this will be executed
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}