/* In this challenge, you have to implement the function evenOdd. It takes a number num as a parameter. 
You have to make use of the concept of promises to determine whether num is even or odd. You need to do 
the following:
•	If num is not a number, reject the promise with the data error that is passed to it.
•	If num is odd, resolve the promise after 1 second with the data odd passed to it.
•	If num is even, reject the promise after 2 seconds with the data even passed to it.
The function test takes a number as a parameter. Call evenOdd on this number and handle the promise returned 
from it, displaying the result on the console for both the cases: resolve and reject

Input 
A number
Output 
Display whether number is even or odd
Sample input 
2
1
3
0
"ab"
Sample output 
"even"
"odd"
"odd"
"even"
"error"
*/
function evenOdd(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("error");
    } else if (num % 2 === 0) {
      setTimeout(() => {
        reject("even");
      }, 2000);
    } else {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    }
  });
}

function test(num) {
  evenOdd(num)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
