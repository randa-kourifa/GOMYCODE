const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentCircle = 1;

//next button event listener
nextBtn.addEventListener('click', () => {
    //if last circle or not
    if (currentCircle === circles.length) {
        // if last circle, we cant click next
        nextBtn.disabled = true;
    } else if (currentCircle >= 1) {
        // if not last circle, we can click next and add 1 to current circle
        prevBtn.disabled = false;
        currentCircle++;
    }
    update()
})



//prev button event listener
prevBtn.addEventListener('click', () => {

    // check if first circle or not
    if (currentCircle === 1) {
        //if yes we cant click prev button
        nextBtn.disabled = false;
        prevBtn.disabled = true;
    } else {
        //if no we can click prev button 
        nextBtn.disabled = false;
        currentCircle--; //currentCircle = currentCircle - 1
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