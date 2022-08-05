// import functions and grab DOM elements
import { goblins } from './goblins-data.js';
const goblinBox = document.getElementById('goblin-box');
const addGoblin = document.querySelector('[name="add-goblins"]');
const combatLog = document.querySelector('#combat-log');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


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
            attackRoll();
            if (attackRoll() >= 4.9) {
                goblin.health--;
                addCombatLogHit(combatLog, goblin);
                displayGoblins();
            } else {
                addCombatLogMiss(combatLog, goblin);
            }
        });
        
    }
}
function addCombatLogHit(listEl, target) {
    const logItem = document.createElement('li');
    logItem.textContent = `You hit ${target.name}`;
    listEl.append(logItem);
}
function addCombatLogMiss(listEl, target){
    const logItem = document.createElement('li');
    logItem.textContent = `You missed ${target.name}`;
    listEl.append(logItem);
}
function attackRoll(){
    const roll = Math.floor(Math.random() * 10);
    return roll;
}