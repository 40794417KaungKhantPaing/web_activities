// Game State
var hp = 100;
var gold = 0;
var currentMonsterHP = 0;

var monsters = ["Goblin", "Slime", "Skeleton", "Angry Bat"];
var treasures = ["Gold Nugget", "Silver Ring", "Magic Herb"];

function updateUI() {
    document.getElementById("hp-display").innerText = "HP: " + hp;
    document.getElementById("gold-display").innerText = "Gold: " + gold;
    
    if (hp <= 0) {
        log("GAME OVER. You died in the dungeon.", "monster");
        document.getElementById("btn-move").disabled = true;
        document.getElementById("btn-attack").disabled = true;
    }
}

function log(message, className) {
    var logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p class="${className}">${message}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll to bottom
}

function move() {
    log("You enter a new room...", "system");
    document.getElementById("btn-attack").disabled = true;

    // 50% chance for a monster
    if (Math.random() > 0.5) {
        var name = monsters[Math.floor(Math.random() * monsters.length)];
        currentMonsterHP = 20;
        log("A " + name + " appears! (20 HP)", "monster");
        document.getElementById("btn-attack").disabled = false;
    } 
    // Otherwise, check for treasure
    else if (Math.random() > 0.6) {
        var item = treasures[Math.floor(Math.random() * treasures.length)];
        var value = Math.floor(Math.random() * 20) + 10;
        gold += value;
        log("You found " + item + " worth " + value + " gold!", "treasure");
    } else {
        log("The room is empty and cold.", "system");
    }
    updateUI();
}

function attack() {
    var damageToMonster = Math.floor(Math.random() * 10) + 5;
    var damageToPlayer = Math.floor(Math.random() * 8);

    currentMonsterHP -= damageToMonster;
    hp -= damageToPlayer;

    log("You hit for " + damageToMonster + ". Enemy hits you for " + damageToPlayer + ".", "system");

    if (currentMonsterHP <= 0) {
        log("The monster defeated!", "treasure");
        document.getElementById("btn-attack").disabled = true;
    }
    updateUI();
}