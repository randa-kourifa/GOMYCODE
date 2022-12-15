const button = document.querySelector('button')
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.quote-author')
const quoteDate = document.querySelector('.date')

button.addEventListener("click", getQuote)
async function getQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()


    quoteText.innerHTML = quote.content
    quoteAuthor.innerHTML = quote.author

}