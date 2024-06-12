// How to write promises in javascript!

let p = new Promise(function (resolve, reject) {
  let a = 1 + 6;
  if (a == 2) {
    resolve("SUCCESS");
  } else {
    reject("FAILED");
  }
});

// p.then().catch(); .then() is called when promise is fullfilled! .catch() is called when promise is rejected...

p.then(function (message) {
  console.log("Promise Successful", message);
}).catch(function (error) {
  console.log("Promise rejected", error);
});
