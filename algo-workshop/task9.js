let year = Math.floor(date % 10000);
let month = Math.floor((date % 1000000) / 10000);
let day = Math.floor(date / 1000000);
let date = {
    year,
    month,
    day
}
console.log(date)