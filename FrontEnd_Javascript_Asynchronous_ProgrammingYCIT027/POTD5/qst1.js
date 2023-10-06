/* Question 1
Write a function multiplyByTwo that takes an array of numbers 
and a callback function as parameters. The multiplyByTwo function 
should iterate over the array, multiply each element by 2, and pass 
the result to the callback function. Finally, the callback function 
should display the multiplied values.

const numbers = [1, 2, 3, 4, 5];
function displayResult(value) {
  console.log(value);
}
multiplyByTwo(numbers, displayResult);

Expected Output:
2
4
6
8
10
*/

const numbers = [1, 2, 3, 4, 5];

function displayResult(value) {
  console.log(value);
}

function multiplyByTwo(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const result = arr[i] * 2;
    callback(result);
  }
}

multiplyByTwo(numbers, displayResult);
