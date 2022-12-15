const accordions = document.querySelectorAll('.accordion');

for (let i = 0; i < accordions.length; i++) {

    accordions[i].addEventListener('click', function() {

        accordions[i].classList.toggle('active');

        let panel = accordions[i].nextElementSibling;

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    })

};
// another way to do it
// function hide(e) {
//     var x = e.target.nextElementSibling;
//     console.log(x)


//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }