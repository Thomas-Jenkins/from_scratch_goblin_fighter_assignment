export function renderGoblin(goblin) {
    const goblinEL = document.createElement('div');
    const goblinName = document.createElement('h3');
    const goblinHealth = document.createElement('p');
    const goblinEmoji = document.createElement('p');
    goblinName.textContent = goblin.name;
    goblinHealth.textContent = goblin.health;
    (goblin.health === 0) ? goblinEmoji.textContent = '💀' : goblinEmoji.textContent = '👺';
    goblinEL.classList.add('goblin');
    goblinEL.append(goblinName, goblinHealth, goblinEmoji);
    return goblinEL;
}