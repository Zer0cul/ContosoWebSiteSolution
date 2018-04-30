//User file call linked library z9math_example
// library is published  on npmjs.org as z9math_example
// Library is installed globally npm i -g z9math_example
// then it linket to the user folder by npm link z9math_example

var math_example = require('z9math_example');

var result = 0;

console.log();
result = math_example.addition(5, 10);
console.log('addition(5,10)= ' + result);

console.log(); result = math_example.subtraction(50, 10); console.log('subtraction(50,10) = ' + result);

console.log(); result = math_example.multiplication(3, 7); console.log('multiplication(3,7) = ' + result);

console.log(); result = math_example.division(27, 3); console.log('division(27,3) = ' + result);

console.log(); result = math_example.fibonacci(3); console.log('fibonacci(3) = ' + result);


console.log('done');

