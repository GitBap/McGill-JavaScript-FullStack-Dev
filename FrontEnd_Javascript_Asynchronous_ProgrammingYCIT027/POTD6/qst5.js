/* Write a function called delayedUpperCase that takes in a string and returns a Promise. 
The Promise should resolve after a delay of 2 seconds and return the uppercase version of
 the input string. */

function delayedUpperCase() {
  return promise;
}

function delayedUpperCase(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === "string") {
        resolve(str.toUpperCase());
      } else {
        reject("Error");
      }
    }, 2000);
  });
}
