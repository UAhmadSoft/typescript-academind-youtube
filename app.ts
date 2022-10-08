// *  ts function return type
function add(n1: number, n2: number): number {
  return n1 + n2;
}

let combineValues: Function;
combineValues = add;

// let combineValues = () => number;
// combineValues = 5;
// combineValues = printResult;

// * ts unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

console.log('userName', userName);
console.log('userInput', userInput);

// * ts never type
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

const result2 = generateError('An error occurred!', 500);
console.log(result2);
