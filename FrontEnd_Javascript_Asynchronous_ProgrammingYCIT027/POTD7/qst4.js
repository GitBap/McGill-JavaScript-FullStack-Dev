/* Write a function that takes an array of strings and returns a Promise 
that resolves to an array of the lengths of the strings. */

function getLengthsOfArray(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Error: Input is not an array");
    } else {
      const lengths = arr.map((str) => str.length);
      resolve(lengths);
    }
  });
}
