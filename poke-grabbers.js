import {getItemState, setItemState, findById} from './utils.js';



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
    const pokedex = getItemState();
}



// export function generateThree()
//this should generate three new unique pokemon