import { getItemState, setItemState, findById } from './utils.js';
import pokeShop from './pokemon.js';
export function capturePokemon(poke) {
//this should get a pokemon the user selects
    const currentData = getItemState();
    const matchingPokeOnData = findById(array, poke.id);
//this now should record the catch with the matching poke on the pokedex
    matchingPokeOnData.captured++;

    setItemState(currentData);

    return currentData;
}

export function encounterPokemon(poke) {
//this should allow us to record the number of times any poke appears in the user array
console.log(poke);    
    const currentData = getItemState();
    const matchingPokeOnData = findById(currentData, poke.pokemon);

    if (matchingPokeOnData) {
        matchingPokeOnData.encountered++;
    } else {
        const newPoke = {
            id: poke.pokemon,
            captured: 0,
            encountered: 1
        };
        currentData.push(newPoke);
    }
    setItemState(currentData);
    return currentData;
}

export function generateThree() {
    let randomNumber1 = getRandomIndex();
    let randomNumber2 = getRandomIndex();
    let randomNumber3 = getRandomIndex();
    while (
        randomNumber1 === randomNumber2
        || randomNumber2 === randomNumber3
        || randomNumber1 === randomNumber3
    ) {
        randomNumber1 = getRandomIndex();
        randomNumber2 = getRandomIndex();
        randomNumber3 = getRandomIndex();
    }
    const poke1 = pokeShop[randomNumber1];
    const poke2 = pokeShop[randomNumber2];
    const poke3 = pokeShop[randomNumber3];

    return [poke1, poke2, poke3];
}
function getRandomIndex() {
    return Math.floor(Math.random() * pokeShop.length);
}
//this should generate three new unique pokemon
