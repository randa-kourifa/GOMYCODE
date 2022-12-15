const time = 5
let temps = time * 60
const timer = document.querySelector("#timer")

setInterval(() => {
    let minutes = parseInt(temps / 60)
    let secondes = parseInt(temps % 60)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timer.innerText = `${minutes}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
}, 1000)