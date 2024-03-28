/**
 * *    Async keyword in JavaScript
 *  ?   Async enables a function() to return a Promise
 */

// This is the code that produces a promise.
//  const PROMISE = new Promise((resolve, reject) => {
//   let fileLoaded = true;

//   if (fileLoaded) {
//     resolve('File loaded bro.');
//   } else {
//     reject('File not found bro.');
//   }
//  });

// This is the code that consumes the promise.
// PROMISE.then((value) => {
//   console.log(`This is in .then >> ${value}`);
// }).catch((value) => {
//   console.log(`This is in .catch >> ${value}`);
// });

// This is the code to create an async function
async function loadFile() {
  let fileLoaded = true;

  if (fileLoaded) {
    return Promise.resolve(`File loaded bro.`);
  } else {
    return Promise.reject(`File not found bro.`);
  }
}

loadFile()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

/**
 * *  Await keyword in JavaScript
 * ?  Await makes an async function() wait for a Promise
 */

// This is the code to create an async function
async function openFile() {
  let fileOpened = false;

  if (fileOpened) {
    return Promise.resolve(`File opened too.`);
  } else {
    return Promise.reject(`File couldn't be opened.`);
  }
}

async function startProcess() {
  // Surround critical code to catch the error when thrown
  try {
    let confirmation = await openFile();
    console.log(confirmation);
    // Catch errors
  } catch (error) {
    console.log(error);
  }
}

startProcess();
