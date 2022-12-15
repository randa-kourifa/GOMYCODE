function ageOnEarthCal(ageinsecond) {
    return ageinsecond / 31557600
}

export function ageOnPlanet(planet, second) {
    const ageOnEarthYears = ageOnEarthCal(second)
    return ageOnEarthYears * orbi[planet]
}