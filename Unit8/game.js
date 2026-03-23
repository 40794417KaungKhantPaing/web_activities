// --- 1. INITIAL SETUP & LOADING ---
var gameState = {
    hp: 100,
    gold: 0,
    currentMonsterHP: 0
};

// Check if there is a saved game in Local Storage
if (localStorage.getItem("dungeonSave")) {
    // Load the string and convert it back to an object
    var savedData = JSON.parse(localStorage.getItem("dungeonSave"));
    gameState = savedData;
    log("Welcome back! Your progress has been restored.", "system");
}

var monsters = ["Goblin", "Slime", "Skeleton", "Angry Bat"];
var treasures = ["Gold Nugget", "Silver Ring", "Magic Herb"];

// --- 2. CORE FUNCTIONS ---

function saveGame() {
    // Convert the gameState object to a string and save it
    localStorage.setItem("dungeonSave", JSON.stringify(gameState));
}

function updateUI() {
    document.getElementById("hp-display").innerText = "HP: " + gameState.hp;
    document.getElementById("gold-display").innerText = "Gold: " + gameState.gold;
    
    if (gameState.hp <= 0) {
        log("GAME OVER. Progress reset.", "monster");
        resetGame();
    }
}

function resetGame() {
    localStorage.removeItem("dungeonSave");
    gameState.hp = 100;
    gameState.gold = 0;
    document.getElementById("btn-move").disabled = false;
    updateUI();
}

function log(message, className) {
    var logDiv = document.getElementById("log");
    logDiv.innerHTML += `<p class="${className}">${message}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight;
}

// --- 3. GAMEPLAY ACTIONS ---

function move() {
    log("You enter a new room...", "system");
    document.getElementById("btn-attack").disabled = true;

    if (Math.random() > 0.5) {
        var name = monsters[Math.floor(Math.random() * monsters.length)];
        gameState.currentMonsterHP = 20;
        log("A " + name + " appears!", "monster");
        document.getElementById("btn-attack").disabled = false;
    } 
    else if (Math.random() > 0.6) {
        var value = Math.floor(Math.random() * 20) + 10;
        gameState.gold += value;
        log("You found " + value + " gold!", "treasure");
    }
    
    saveGame(); // Save after every move
    updateUI();
}

function attack() {
    var dmgToMonster = Math.floor(Math.random() * 10) + 5;
    var dmgToPlayer = Math.floor(Math.random() * 8);

    gameState.currentMonsterHP -= dmgToMonster;
    gameState.hp -= dmgToPlayer;

    log(`You deal ${dmgToMonster} dmg. You take ${dmgToPlayer} dmg.`, "system");

    if (gameState.currentMonsterHP <= 0) {
        log("Monster defeated!", "treasure");
        document.getElementById("btn-attack").disabled = true;
    }
    
    saveGame(); // Save after every attack
    updateUI();
}

// Initialize the UI on first load
updateUI();