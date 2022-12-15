const nuc = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
}

function trans(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = nuc[arr[i]]
    }
}
trans(["G", "C", "T", "A"])