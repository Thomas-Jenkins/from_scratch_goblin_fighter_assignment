export function renderGoblin(goblin){
    const goblinEL = document.createElement('div');
    const goblinName = document.createElement('h3');
    const goblinHealth = document.createElement('p');

    goblinName.textContent = goblin.name;
    goblinHealth.textContent = goblin.health;

    goblinEL.append(goblinName, goblinHealth);
    return goblinEL;
}