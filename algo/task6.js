var arr = [1, 2, 2, 3, 3, 3, 4, 5];

var max = 0;
var maxItem = 0;
var counts = {
    "1": 2
};
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] > max) {
        max = counts[item];
        maxItem = item;
    }
}
console.log(maxItem);