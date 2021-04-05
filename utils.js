const DATAKEY = 'DATAKEY';

export function setItemState(parsedData) {
    const stringyData = JSON.stringify(parsedData);
    localStorage.setItem(DATAKEY, stringyData);
}
export function getItemState() {
    const storedData = localStorage.getItem(DATAKEY);
    const receivedData = JSON.parse(storedData);
    if(!receivedData) {
        return [];
    } else {
        return receivedData;
    }
}