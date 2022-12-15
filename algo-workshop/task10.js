let str = "((())";
let count = 0;
var is_correct = true;
for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
        count++;
    } else if (str[i] === ")") {
        count--;
    }
    if (count < 0) {
        is_correct = false;
    }
}
if (count !== 0) {
    is_correct = false;
}

if (is_correct) {
    console.log("correct")
} else {
    console.log("incorrect")
}