import { setItemState } from '../utils.js';
import { getItemState } from '../utils.js';
import pokeShop from '../pokemon.js';
import { findById } from '../utils.js';
import { encounterPokemon } from '../poke-grabbers.js';



const test = QUnit.test;
const DATAKEY = 'DATAKEY';

const fakePokemon = [
    {'_id':'5cef3501ef6005a77cd4fd17',
    'pokemon':'bulbasaur',
    'id':1,
    'species_id':1,
    'height':7,
    'weight':69,
    'base_experience':64,
    'type_1':'grass',
    'type_2':'poison',
    'attack':49,
    'defense':49,
    'hp':45,
    'special_attack':65,
    'special_defense':65,
    'speed':45,
    'ability_1':'overgrow',
    'ability_2':'NA',
    'ability_hidden':'chlorophyll',
    'color_1':'#78C850',
    'color_2':'#A040A0',
    'color_f':'#81A763',
    'egg_group_1':'monster',
    'egg_group_2':'plant',
    'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    'generation_id':1,
    'evolves_from_species_id':'NA',
    'evolution_chain_id':1,
    'shape_id':8,
    'shape':'quadruped',
    'pokebase':'bulbasaur',
    'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    }];

test('see about local storage', (expect) => {

    setItemState(fakePokemon);
    const storage = JSON.parse(localStorage.getItem(DATAKEY));

    expect.deepEqual(fakePokemon, storage);
});

test('see about find id', (expect) => {

    const actual = findById(pokeShop, fakePokemon.id);
    expect.deepEqual(actual, fakePokemon.id);
});
test('encountering pokemon should increment encountered poke and update local storage', (expect) => {
    //need which are currently displayed and compare the state of all three pokemon to the current state and update them by 1
    const updatedLocalStorage = encounterPokemon(fakePokemon);
    const storedPoke = getItemState();

    expect.deepEqual(updatedLocalStorage, storedPoke);
// expect to see that it won't be equal
});

