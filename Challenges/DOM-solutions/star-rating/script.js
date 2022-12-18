let current;
let clicked = false

function handleMouseOver(e) {
    const num = e.target.dataset.ratingVal;
    console.log(num)
    fill(num);
}

function handleMouseLeave() {
    if (!clicked) {
        fill(current);
    }
}

function handleClick() {
    clicked = true
    const num = e.target.dataset.ratingVal;
    fill(num)
}

function fill(val) {
    const element = document.querySelector(".div");
    for (let i = 0; i < 5; i++) {
        if (i < val) {
            element.children[i].classList.add("fa-star");
        } else {
            element.children[i].classList.remove("fa-star");
        }
    }
}