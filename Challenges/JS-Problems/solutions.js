//1. number of words in a sentence

function countWords(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    return count + 1;
}
//2. sumOfDistinct
function sumOfDistinct(arr1, arr2) {
    let hash = {};
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (!hash[arr1[i]]) {
            hash[arr1[i]] = true;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!hash[arr2[i]]) {
            hash[arr2[i]] = true;
        } else {
            hash[arr2[i]] = false;
        }
    }
    for (let key in hash) {
        if (hash[key]) {
            sum += key;
        }
    }
    return sum;
}


//sumOfOverlapping
function sumOfOverlapping(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sum += arr1[i];
            }
        }
    }
    return sum * 2;

}
//s1.second to hours, minutes, seconds
function convertSecond(second) {
    let hour = Math.floor(second / 3600);
    let minute = Math.floor((second % 3600) / 60);
    let second = Math.floor((second % 3600) % 60);
    return {
        hour: hour,
        minute: minute,
        second: second
    };
}


// 2.Write JS function to count the number of vowels in a given string
function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }

    }
    return count;
}

//3.given a set of 2 arrays, write a JS function to find the common elements between them. without using built-in functions
function commonElements(arr1, arr2) {
    let common = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                common.push(arr1[i]);
            }
        }
    }
    return common;
}

//4.Write a JS function to find the longest string in a given array of strings.
function longestString(arr) {
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

//5.given a set of 2 arrays, write a JS function to calculate the sum
function sum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
///6.who likes this
function likes(names) {
    if (names.length === 0) {
        return 'no one likes this';
    } else if (names.length === 1) {
        return names[0] + ' likes this';
    } else if (names.length === 2) {
        return names[0] + ' and ' + names[1] + ' like this';
    } else if (names.length === 3) {
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    } else if (names.length > 3) {
        return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}
//8.
function SumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

//9.Given an array of integers, return a new array with each value doubled.
function double(x) {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        arr.push(x[i] * 2);
    }
    return arr;
}

//10. SUM of numbers from 1 to N
function SumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

//11.
function plural(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][arr[i].length - 1] === 's') {
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i] + 's');
        }
    }
    return newArr;
}

//12.
function countSheep(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += i + ' sheep...';
    }
    return str;
}