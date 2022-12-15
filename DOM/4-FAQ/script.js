const accordions = document.querySelectorAll('.accordion');

for (let i = 0; i < accordions.length; i++) {

    accordions[i].addEventListener('click', function() {
        // change the background of the section  when click
        accordions[i].classList.toggle('active');
        // open the panel on click
        let panel = accordions[i].nextElementSibling;

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }


    })

};