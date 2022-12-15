const util = require("./util")
const INPUT_SECOND = prompt("entrer l'age en seconde")

const orbi = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1,
}

for (let planet in orbi) {
    console.log(util.ageOnPlanet(planet, INPUT_SECOND))
}