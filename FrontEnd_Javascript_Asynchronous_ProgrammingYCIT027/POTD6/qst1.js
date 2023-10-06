/* Study the code below and answer the question following it. 
What will be the output of the code above? Explain the logic 
behind the output step by step.*/

var promise = func1();

promise

  .then(function (result1) {
    console.log(result1);
    return func2();
  })

  .then(function (result2) {
    console.log(result2);
    return result2 % 10;
  })

  .then(function (result3) {
    console.log(result3);
  });

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello");
    }, 1000);
  });
}

function func2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(50);
    }, 1000);
  });
}

/* Answer: First of all, the code declres and assigns the promise element to func1.
So when promise is called, it executes func1. func1 returns a promise with resolves 
and rejects as arguments. After 1 second, the function logs "Hello" and returns func2. 
func2 returns a promise with the same argumments (resolve and reject). After 1 second, it 
revolves 50, then it takes 50 and calculates the remainder of 50 divided 10 (0).
The third then function is chained, so "0" is passed to the third then function that logs 0.

Output: Hello 50 0 */
