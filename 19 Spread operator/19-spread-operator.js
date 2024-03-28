/* 
    Spread operator
*/

// Allows an iterable such as an array or string
// to be expanded in places where zero or more
// arguments are expected (unpacks the elements)

let numbers = [11, 42, 69, 7, 3, 10, 77, 17, 86, 98];
console.log(...numbers);

let userName = 'Homelander';
console.log(...userName);

let maxValue = Math.max(...numbers);
// without expanding first the output would be NaN
console.log(maxValue);

let class1 = ['Andy', 'Spongebob', 'Superman'];
let class2 = ['Teo', 'Xena', 'Zelda'];

class1.push(...class2);
// without expanding first class2 would be added as
// an array element to class1
console.log(class1);
