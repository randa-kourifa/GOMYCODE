const pokemonslist = document.querySelectorAll("tr");
console.log(pokemonslist)

function deletePokemon(e) {
    e.target.parentElement.parentElement.remove();
    console.log(e)
}

function addOne(e) {

    const pokemon = e.target.parentElement.parentElement;
    console.log(pokemon)
    const count = parseInt(pokemon.querySelector(".count").innerText);
    pokemon.querySelector(".count").innerText = count + 1;



}

function removeOne(e) {
    const pokemon = e.target.parentElement.parentElement;
    const count = parseInt(pokemon.querySelector(".count").innerText);
    if (count > 1) {
        pokemon.querySelector(".count").innerText = count - 1;
    }
}