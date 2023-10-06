/* Study the code below and answer the question following it.
What will be the output of the code? Explain the logic behind the output step by step. */

function exam(arg) {
  return new Promise(function (resolve, reject) {
    if (arg > 50) {
      resolve("Pass");
    } else {
      reject("Fail");
    }
  });
}

let promise = exam(60);

promise
  .then(function (result) {
    console.log(result);

    return exam(20);
  })

  .catch(function (error) {
    console.log(error);

    return "Error";
  })

  .then(function (result) {
    console.log(result);

    return exam(80);
  })

  .catch(function (error) {
    console.log(error);
  }); /*

/* Answer: First, we the function exam that has an argument (arg) It returns a promise function with two arguments(resolve and reject).
If the argument of the function exam is bigger than 50, it means that it has 'passed'. if not it has 'failed'. 
The exam function, with an argument of 60, has been assigned to the promise. So since the argument 60 is greater than 50, the
promise resolves with 'Pass'. After that, it goes to the then callback function where exam(20) is returned. 20 is not greater than
 50, so it is rejected with the value 'fail' which leads to to the catch callback function. It returns 'error'. A then function chaided 
 to the previous returns exam(80). 80 is greater than 50, so the promise will return 'pass'. 
 Output:
 pass
 fail
 error
 
 */
