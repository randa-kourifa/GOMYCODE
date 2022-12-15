// find the sum of all numbers in an array

var arr = [1, 2, 3, -5, 10];
localStorage.setItem("name", "hamza")
console.log(localStorage.getItem("name"))
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);