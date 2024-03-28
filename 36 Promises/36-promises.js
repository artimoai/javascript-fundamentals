/**
 * *    Promises in JavaScript
 * ?    A promise is an object that encapsulates the result
 * ?    of an asynchronous operation. It allows async methods
 * ?    to return values like synchronous methods.
 * TODO "I promise to return something in the future."
 *
 * ?    A promise has STATES: pending, fulfilled, rejected.
 * ?    A promise returns a RESULT.
 *
 * ?    A promise has two parts: the producing and the consuming code.
 *
 * ?    Promises avoid going into "callback hell".
 */

// This is the code that produces a promise.
const PROMISE = new Promise((resolve, reject) => {
  let fileLoaded = false;

  if (fileLoaded) {
    resolve('File loaded bro.');
  } else {
    reject('File not found bro.');
  }
});

// This is the code that consumes the promise.
PROMISE.then((value) => {
  console.log(`This is in .then >> ${value}`);
}).catch((value) => {
  console.log(`This is in .catch >> ${value}`);
});

// Example using promises instead of callbacks
let userGaming = false;
let userBrowsingMemes = true;

function studyJavaScriptPromise() {
  return new Promise((resolve, reject) => {
    if (userGaming) {
      reject({
        errorID: 'User is gaming',
        errorMessage: `Why aren't you studying?`,
      });
    } else if (userBrowsingMemes) {
      reject({
        errorID: 'User is browsing memes',
        errorMessage: `Why aren't you coding?`,
      });
    } else {
      resolve(`Congrats! Keep learning JavaScript.`);
    }
  });
}

studyJavaScriptPromise()
  .then((promiseMessage) => {
    console.log(`${promiseMessage}`);
  })
  .catch((error) => {
    console.log(`${error.errorID} >> ${error.errorMessage}`);
  });

//
