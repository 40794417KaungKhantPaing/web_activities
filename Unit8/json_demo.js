// A JSON string (how data arrives from a server)
var j_str = '{"firstname":"Jebediah", "age": 125}';

// Convert String -> Object (Parsing)
var j_obj = JSON.parse(j_str);
console.log(j_obj.firstname); // Outputs: Jebediah

// Modify the object
j_obj['lastname'] = "Springfield";
j_obj.isAlive = true;

// Convert Object -> String (Stringifying) to save it
var s = JSON.stringify(j_obj);
console.log(s);