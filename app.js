// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';
// import functions and grab DOM elements
import { mountains } from './mountain-data.js';
import { renderMountain } from './render-mountains.js';
// initialize global state
const candyList = document.getElementById('candy-list');

function displayCandies() {
    candyList.innerHTML = '';

    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyList.append(candyEl);
    }
}

displayCandies();

const mountainList = document.getElementById('mountain-list');

function displayMountains() {
    mountainList.innerHTML = '';

    for (let mountain of mountains) {
        const mountainEl = renderMountain(mountain);
        mountainList.append(mountainEl);
    }
}

displayMountains();
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
