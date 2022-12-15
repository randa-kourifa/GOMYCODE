//find duplicate elements in an array:

var arr = [1, 2, 2, 3, 3, 4, 5]
var len = arr.length
var out = []
var counts = {};
for (var i = 0; i < len; i++) {
    var item = arr[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] === 2) {
        out.push(item);
    }
}
console.log(counts)
console.log(out)