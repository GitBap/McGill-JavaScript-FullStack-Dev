/* Write a function that takes an array of numbers and returns a Promise 
that resolves to the sum of the numbers. */

function sumOfNumber(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Error: Input is not an array");
    } else {
      const sum = arr.reduce((acc, num) => acc + num, 0);
      resolve(sum);
    }
  });
}
