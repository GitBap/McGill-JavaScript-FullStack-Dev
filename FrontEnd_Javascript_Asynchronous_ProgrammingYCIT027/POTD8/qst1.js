/* function func1(num) {
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(num);
    }, 1000);
  });
}

async function multiply(num) {
  const x = func1(10);
  const y = func1(3);
  return num * await x * await y;
}

multiply(10).then(function(result){
  console.log(result);
});
What will be the output of this code? Explain the reason behind the output step by step. 
*/

/* Output: 300: 
First, it begins by defining a function named `func1(num)` which returns a promise. This promise 
resolves after a delay of 1 second with the value of `num`. The `multiply(num)` function is declared 
as an async function, which means it will return a promise. Then, two promises are created using `func1(10)` 
and `func1(3)`. and they will be resolved after a delay of 1 second with the numbers 10 and 3 respectively. 
The `await` keyword is used to pause the execution of the function until the promises are resolved. `x` and `y` 
will hold the resolved values of the promises returned by `func1(10)` and `func1(3)` respectively. Next, the result 
is calculated by multiplying the input `num` with the values obtained from `x` and `y` using the `*` operator. The calculated 
result is then returned as the resolved value of the promise returned by the `multiply` function. The `then` method is called 
on the promise returned by `multiply(10)`, and a callback function is provided. Therefore, after a delay of 1 second for each 
promise,  10 * 10 * 3 is calculated which is 300. The answer is logged to the console. */
