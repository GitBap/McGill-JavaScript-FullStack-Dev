/* Question 4: Write a function filterArray that takes in an array of numbers and a callback function. The function should return a new array containing only the elements from the original array for which the callback function returns true.
function filterArray(arr, callback) {
  // Your code here
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];
const isEven = function(num) {
  return num % 2 === 0;
};
console.log(filterArray(numbers, isEven)); // Expected output: [2, 4] */

function filterArray(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

const numbers = [1, 2, 3, 4, 5];
const isEven = function (num) {
  return num % 2 === 0;
};

console.log(filterArray(numbers, isEven)); // Expected output: [2, 4]
