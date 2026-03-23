// 1. Check if storage is supported/available
function storageAvailable(type) {
    try {
        var storage = window[type], x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch(e) {
        return false;
    }
}

// 2. Using Local Storage
if (storageAvailable('localStorage')) {
    // Save data
    localStorage.setItem('username', 'Carol Danvers');
    
    // Retrieve data
    var user = localStorage.getItem('username');
    console.log("Welcome back, " + user);
    
    // Save a JSON Object (Must stringify first!)
    var player = { hp: 100, gold: 50 };
    localStorage.setItem('playerData', JSON.stringify(player));
    
    // Load a JSON Object (Must parse after loading)
    var savedData = JSON.parse(localStorage.getItem('playerData'));
    console.log("Player HP: " + savedData.hp);
}