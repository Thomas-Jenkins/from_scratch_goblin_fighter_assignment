// import functions and grab DOM elements
import { goblins } from './goblins-data.js';
import { renderGoblin } from './render-utils.js';
const goblinBox = document.getElementById('goblin-box');
const addGoblin = document.querySelector('[name="add-goblins"]');
const combatLog = document.querySelector('#combat-log');
const playerHP = document.getElementById('player-health');
const goblinTally = document.getElementById('goblin-tally');

// let state
let player = 10;
let slainGoblins = 0;
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
        health: 3,
        emoji: '👺'
    };
    goblins.push(newGoblin);
    displayGoblins();
});

function displayGoblins() {
    goblinBox.textContent = '';
    for (let goblin of goblins){
        const goblinEL = renderGoblin(goblin);
        
        
        goblinEL.addEventListener('click', () => {
            if (goblin.health > 0 && player > 0) {
                attackRoll();
                if (attackRoll() >= 4.9) {
                    goblin.health--;
                    addCombatLogHit(combatLog, player, goblin);
                    
                } else {
                    addCombatLogMiss(combatLog, player, goblin);
                    
                }
                if (goblin.health === 0) {
                    slainGoblins++;
                    goblinTally.textContent = slainGoblins + ' Goblins Slain';
                }
                attackRoll();
                if (attackRoll() >= 6){
                    player--;
                    playerHP.textContent = player;
                    addCombatLogHit(combatLog, goblin, player);
                } else {
                    addCombatLogMiss(combatLog, goblin, player);
                }
            } else {
                const logItem = document.createElement('li');
                logItem.textContent = 'Stop! They\'re already dead!';
                combatLog.append(logItem); 
            }
            if (player === 0) {
                alert('You Died');
            }
            displayGoblins();
        });
        goblinBox.append(goblinEL);
    }
}
function addCombatLogHit(listEl, source, target) {
    const logItem = document.createElement('li');
    if (source === player){
        logItem.textContent = `You hit ${target.name}`;
        listEl.append(logItem);
    } else if (source !== player){
        logItem.textContent = `${source.name} hit you!`;
        listEl.append(logItem);
    }
}
function addCombatLogMiss(listEl, source, target){
    const logItem = document.createElement('li');
    if (source === player){
        logItem.textContent = `You missed ${target.name}`;
        listEl.append(logItem);
    } else if (source !== player){
        logItem.textContent = `${source.name} missed you!`;
        listEl.append(logItem);
    }
}



function attackRoll(){
    const roll = Math.floor(Math.random() * 10);
    return roll;
}