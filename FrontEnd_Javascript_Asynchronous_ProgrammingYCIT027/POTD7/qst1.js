/* Write a function called calculateSum that takes in an array of numbers 
and returns a Promise. The Promise should calculate the sum of the numbers in 
the array and resolve with the result. Chain another Promise to double the 
calculated sum and resolve with the final doubled value. */

function calculateSum(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Error: Input is not an array");
    } else {
      const sum = arr.reduce((acc, num) => acc + num, 0);
      resolve(sum);
    }
  }).then((sum) => {
    const doubledSum = sum * 2;
    return Promise.resolve(doubledSum);
  });
}
