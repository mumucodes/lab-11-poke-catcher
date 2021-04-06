const DATAKEY = 'DATAKEY';
import pokeshop from './pokemon.js';

export function setItemState(parsedData) {
    const stringyData = JSON.stringify(parsedData);
    localStorage.setItem(DATAKEY, stringyData);
}
export function getItemState() {
    const storedData = localStorage.getItem(DATAKEY);
    const receivedData = JSON.parse(storedData);
    if (!receivedData) {
        return [];
    } else {
        return receivedData;
    }
}

export function findById(array, id) {
    for (let poke of array)
        if (poke.id === id) {
            return poke;
        }
}
export function findPoke(name) {
    return pokeshop.find(item => item.pokemon === name);
}