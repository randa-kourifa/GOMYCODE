// linear search algorithm
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) return i;
    }
    return -1;
}
console.log(linearSearch([5, 4, 3, 2, 1], 1));