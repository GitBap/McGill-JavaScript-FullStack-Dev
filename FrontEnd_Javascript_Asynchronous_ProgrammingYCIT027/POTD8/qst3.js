/* In this challenge, you need to print the numbers 0-9 in a sequential manner, so that 
each number is printed after a random waiting time. For example, i=0 might wait 4 seconds 
before being printed, whereas i=1 might wait 2 seconds before being printed. You need to 
use the sleep function (given below) to achieve this. However, it will cause values to be 
printed in a non-sequential manner. Your task is to write the code in a way that the values 
are printed in a sequential manner.
You need to implement the concept of async/await in this exercise.
Input 
print function
Output 
Displaying numbers from 0-9 sequentially
Sample input 
print()
Sample output 
0
1
2
3
4
5
6
7
8
9

Challenge 
const sleep = (i,ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));
function print() {
  console.log(" ")

*/

const sleep = (i, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(i), ms));

async function print() {
  for (let i = 0; i < 10; i++) {
    const waitTime = Math.floor(Math.random() * 5000);
    await sleep(i, waitTime);
    console.log(i);s
  }
}

print();
