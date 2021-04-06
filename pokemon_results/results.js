import { getItemState } from '../utils.js';

const results = getItemState();

var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const captured = [];
const encountered = [];

for (let pokemon of results) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}
var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon captured',
                data: captured,
                backgroundColor: 'blue',
                borderColor: 'dark-blue',
                borderWidth: 2
            },
            {
                label: 'Pokemon captured',
                data: captured,
                backgroundColor: 'green',
                borderColor: 'dark-green',
                borderWidth: 2
            }
            ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});