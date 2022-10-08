// *  ts function return type
function add(n1, n2) {
    return n1 + n2;
}
var combineValues;
combineValues = add;
// let combineValues = () => number;
// combineValues = 5;
// combineValues = printResult;
// * ts unknown type
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log('userName', userName);
console.log('userInput', userInput);
// * ts never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result2 = generateError('An error occurred!', 500);
console.log(result2);
