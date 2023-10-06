function func1(num) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(num);
    }, 2000);
  });
}

async function multiply1(num) {
  const x = await func1(10);
  const y = await func1(3);
  return num * x * y;
}

multiply1(5).then(function (result) {
  console.log(result);
});

async function multiply2(num) {
  const x = func1(10);
  const y = func1(3);
  return num * (await x) * (await y);
}

multiply2(5).then(function (result) {
  console.log(result);
});

/* Which of the following options are true for the code above? Explain your reason thoroughly


B)
multiply2 takes lesser time to execute than multiply1
Because multiply1 waits for each promise to be resolved to go on the next one (because of the keyword 'await') */
