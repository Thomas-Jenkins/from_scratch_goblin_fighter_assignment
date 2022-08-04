// import functions and grab DOM elements
import { goblins } from './goblins-data.js';
import { renderGoblin } from './render-utils.js';
const goblinBox = document.getElementById('goblin-box');
const addGoblin = document.querySelector('[name="add-goblins"]');
const playercharacter = document.querySelector('#player-character');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function displayGoblins() {
    goblinBox.textContent = '';
    for (let goblin of goblins){
        const goblinDisEL = renderGoblin(goblin);
        goblinBox.append(goblinDisEL);
    }
}

displayGoblins();

addGoblin.addEventListener('submit', (e) => {
    e.preventDefault();
    let var01 = Math.floor(Math.random() * 100);  
    const newGoblin = {
        name: `Goblin #${var01}`,
        health: 3
    };
    goblins.push(newGoblin);
    displayGoblins();
});
