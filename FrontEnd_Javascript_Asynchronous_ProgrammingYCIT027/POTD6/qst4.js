// Write a function that returns a Promise which resolves after a specified number of milliseconds.
function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
