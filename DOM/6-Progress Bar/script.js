const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
//position of the active circle
let currentCircle = 1;

//next button event listener
nextBtn.addEventListener('click', () => {
    //if last circle or not
    if (currentCircle === circles.length) {
        nextBtn.disabled = true;
    } else if (currentCircle >= 1) {
        prevBtn.disabled = false;
        currentCircle++;
    }

    update()
})



//prev button event listener
prevBtn.addEventListener('click', () => {

    // if first circle or not
    if (currentCircle === 1) {
        nextBtn.disabled = false;
        prevBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
        currentCircle--;
    }

    update()
})


function update() {
    //loop sur les circles et ajouter la class active
    //si le circle est inf a currentCircle add class
    //sinon enlever la class
    for (let i = 0; i < circles.length; i++) {
        if (i < currentCircle) {
            circles[i].classList.add('active-circle');
        } else {
            circles[i].classList.remove('active-circle');
        }
    }

    // select active circle
    const activeCircles = document.querySelectorAll('.active-circle');
    //progress bar width = (num active circles / num total circles) * 100 + "%"
    progressBar.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';


}