/* 
    Type conversion in JavaScript
    is the ability to change the data type of a value to another
    (e.g. number to string)
*/

let myAge = window.prompt('Enter your age');

console.log('You entered', myAge);
console.log('The data type of myAge is', typeof myAge);

/* 
    This will result in an error because
    myAge is treated as string and
    1 will be appended at the end of the string as a character
*/

// myAge += 1;
// console.log(myAge);

// To avoid the above scenario we first have to cast myAge as a number
myAge = Number(myAge);
myAge += 1;

console.log('My age + 1 is', myAge);
console.log('The data type of myAge is', typeof myAge);

/*
    More examples with type conversion
*/

let x;
let y;
let z;

x = Number('3.14');
console.log(x, typeof x);

y = String(42);
console.log(y, typeof y);

// An empty string will be evaluated as false
// Typing anything will be evaluated as true
z = Boolean('');
console.log(z, typeof z);
