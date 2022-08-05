// import functions and grab DOM elements
import { goblins } from './goblins-data.js';
// import { renderGoblin } from './render-utils.js';
// import { findGoblin } from './render-utils.js';
const goblinBox = document.getElementById('goblin-box');
const addGoblin = document.querySelector('[name="add-goblins"]');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
function displayGoblins() {
    goblinBox.textContent = '';
    for (let goblin of goblins){
        const goblinEL = document.createElement('div');
        const goblinName = document.createElement('h3');
        const goblinHealth = document.createElement('p');
    
        goblinName.textContent = goblin.name;
        goblinHealth.textContent = goblin.health;
    
        goblinEL.classList.add('goblin');
        goblinEL.append(goblinName, goblinHealth);
        goblinBox.append(goblinEL);
        
        goblinEL.addEventListener('click', () => {
            goblin.health--;
            displayGoblins();
        });
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
