/* Question 2:
Create a function filterByLength that takes an array of strings and a 
callback function as parameters. The filterByLength function should 
iterate over the array and pass each string to the callback function
 only if its length is greater than 5. The callback function should 
 display the filtered strings. 

Example:
const words = ["apple", "banana", "grapefruit", "kiwi", "orange"];
function displayWord(word) {
  console.log(word);
}

filterByLength(words, displayWord);

Expected output:
grapefruit */

const words = ["apple", "banana", "grapefruit", "kiwi", "orange"];

function displayWord(word) {
  console.log(word);
}

function filterByLength(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (word.length > 5) {
      callback(word);
    }
  }
}

filterByLength(words, displayWord);
