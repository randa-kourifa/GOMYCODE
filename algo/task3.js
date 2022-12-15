var arr = [2, 1, 3, -2, 4, -5, 9, 10];

var min = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(min);