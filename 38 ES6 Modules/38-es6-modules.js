/**
 * *    Modules in JavaScript
 * ?    These are JS files containing pre-written reusable pieces of code.
 * ?    Like separate chapters in a book, these JS files can be read at will, only when needed.
 */

// Load pieces of code from the math utils module
import { PI } from './math_utils.js';

// We now have access to the PI variable even though
// it's not defined in the current file.
console.log(PI);

// Lets define a circle with a given radius cRadius
let cRadius = 11;

// Another way to import all pieces of code
import * as MathUtil from './math_utils.js';

// Calculate the circle's circumference
let cCircumference = MathUtil.getCircumference(cRadius);
console.log(cCircumference); //69.1150

// Calculate the circle's total area
let cArea = MathUtil.getArea(cRadius);
console.log(cArea); // 380.133
