/* Write an async function called calculateFactorial that calculates 
the factorial of a given number. The function should return the factorial 
value. */

async function calculteFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
