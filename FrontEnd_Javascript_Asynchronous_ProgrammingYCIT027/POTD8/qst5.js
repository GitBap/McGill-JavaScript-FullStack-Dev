/* Write an async function called processData that processes
 an array of numbers. The function should double each number 
 in the array and return the modified array */

async function processData(numbers) {
  const modifiedArray = numbers.map((number) => number * 2);
  return modifiedArray;
}
