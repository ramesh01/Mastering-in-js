// There are 7 datatypes in JS
// 1. String
// 2. Boolean
// 3. Number
// 4. Null
// 5. Undefined
// 6. Symbol

// Non-primitive
// 7. Object


console.log(typeof null); // "object"
console.log(typeof undefined) // "undefined"

// String - Object 
const str = new String();
console.log(str); // String{''}

console.log(typeof null); // object

console.log(typeof NaN); // number special kind of number

console.log(NaN === NaN);  // false

// It represents a unique identifier, and each symbol value returned from Symbol() is unique.
//@param description — Description of the new Symbol object.
const symbol = Symbol();
