/* Question 3:
Implement a function calculate that takes two numbers and a callback function. The function should apply the callback function to the two numbers and return the result.

function calculate(num1, num2, callback) {
  // Your code here
}
// Example usage:
const add = function(a, b) {
  return a + b;
};
console.log(calculate(5, 3, add)); // Expected output: 8 */

function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

const add = function (a, b) {
  return a + b;
};

console.log(calculate(5, 3, add));
