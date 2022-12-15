const searchContainer = document.querySelector('.search-container');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function() {
    searchContainer.classList.toggle('active');
})