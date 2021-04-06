// import functions and grab DOM elements
import { generateThree, capturePokemon } from './poke-grabbers.js';
import { findById } from './utils.js';

// initialize state
const button = document.querySelector('radio-button');

let totalCaptures = 0;

function createPokemonDom () {
    const pokeRadio1 = document.querySelector('#poke1-button');
    const pokeRadio2 = document.querySelector('#poke2-button');
    const pokeRadio3 = document.querySelector('#poke3-button');

    const pokeMon1 = document.querySelector('#poke1-name');
    const pokeMon2 = document.querySelector('#poke2-name');
    const pokeMon3 = document.querySelector('#poke3-name');

    const threePokemon = generateThree();

    const img1 = document.querySelector('#poke1-img');

    img1.src = threePokemon[0].url_image;
    pokeMon1.append(img1);
    pokeRadio1.value = threePokemon[0].pokemon;

    const img2 = document.querySelector('#poke2-img');

    img2.src = threePokemon[1].url_image;
    pokeMon2.append(img2);
    pokeRadio2.value = threePokemon[1].pokemon;
    
    const img3 = document.querySelector('#poke3-img');

    img3.src = threePokemon[2].url_image;
    pokeMon3.append(img3);
    pokeRadio3.value = threePokemon[2].pokemon;
}
createPokemonDom();

button.addEventListener('click', () => {
    totalCaptures++;
    const userRadioSelection = document.querySelector('input:checked');

    const pokeObject = findById(userRadioSelection.value);
    
    capturePokemon(pokeObject);

    if (totalCaptures >= 10) {
        window.location = '../pokemon_results.';
    }
    createPokemonDom();
});
// set event listeners to update state and DOM