"use strict";
// *  ts function return type
function addMore(n1, n2) {
    return n1 + n2;
}
let combineValues;
combineValues = addMore;
// let combineValues = () => number;
// combineValues = 5;
// combineValues = printResult;
// * ts unknown type
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log('userName', userName);
console.log('userInput', userInput);
// * ts never type
function generateError(message, code) {
    throw { message, errorCode: code };
}
const result2 = generateError('An error occurred!', 500);
console.log(result2);
