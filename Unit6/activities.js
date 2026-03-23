/**
 * Activity 1: Angle Identifier
 * Categorizes an angle based on degrees.
 */
function identifyAngle(degrees) {
    if (degrees > 0 && degrees < 90) {
        return "Acute angle";
    } else if (degrees === 90) {
        return "Right angle";
    } else if (degrees > 90 && degrees < 180) {
        return "Obtuse angle";
    } else if (degrees === 180) {
        return "Straight angle";
    } else {
        return "Invalid or Reflex angle";
    }
}

/**
 * Activity 2: Alphabet Shift
 * Replaces each character with the next one in the character set.
 */
function moveAlphabet(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        // Shifts the character code by 1 and converts back to string
        result += String.fromCharCode(charCode + 1);
    }
    return result;
}

/**
 * Activity 3: Longest String in Array
 * Iterates through an array to find the entry with the greatest length.
 */
function findLongestString(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

// --- TESTING OUTPUTS ---
console.log("--- Activity 1: Angles ---");
console.log(identifyAngle(45));  // Acute angle
console.log(identifyAngle(90));  // Right angle
console.log(identifyAngle(180)); // Straight angle

console.log("--- Activity 2: Alphabet Shift ---");
console.log(moveAlphabet("abc"));   // "bcd"
console.log(moveAlphabet("hello")); // "ifmmp"

console.log("--- Activity 3: Longest String ---");
const myWords = ["apple", "banana", "watermelon", "kiwi"];
console.log(findLongestString(myWords)); // "watermelon"