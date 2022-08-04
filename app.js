// import functions and grab DOM elements
import { goblins } from './goblins-data.js';
import { renderGoblin } from './render-utils.js';
const goblinBox = document.getElementById('goblin-box');
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