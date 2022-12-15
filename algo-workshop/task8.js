function generateColor() {
    const arr = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
    ]
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * arr.length);
        color += arr[random];
    }
    return color;
}
console.log(generateColor())