// var x;
// x = 20;
// console.log(x);

// x = "Alan";
// console.log(x);

// var x = 10;
// console.log(x++); // 10  11
// console.log(++x); //12    12
// console.log(--x); //11    11
// console.log(x--); //11    10

// var x = 0;
// var b = [];

// b[x++] = 10; //b[0]? b[1]
// b[++x] = 20;
// console.log(b);

// let x = "10";
// if (x === 10) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// Always try to use === in place of == to save yourself coercion!

// let age = 10;
// // if (age > 18) {
// //   console.log("Welcome");
// // } else {
// //   console.log("Underage");
// // }

// // age > 18 ? console.log("Welcome") : console.log("Underage");

// let message = age > 18 ? "Welcome" : "Underage";

// typeof

// var x = 10;
// console.log(typeof x);

// x = "Alan";
// console.log(typeof x);

// for (var i = 10; i >= 1; --i) {
//   console.log(i);
// }

// for (var i = 1; i < 10; i += 3) {
//   console.log(i);
// }

// Function Declarations:

// function add(a, b) {
//   return a + b;
// }

// // add(3, 4); //invoking/calling of the function
// console.log(add(3, 4));

// function add(a, b) {
//   console.log("internal", a + b);
//   return b;
// }

// console.log("external", add(3, 4));

// let add = function (a, b) {
//   return a + b;
// };

// // console.log(add(3, 5));

// let add1 = (a, b) => a + b; // it is same as line 66 function ...
// let square = (n) => n * n;

// function myLog(a) {
//   console.log(a);
// }

// myLog("correct");
// myLog("also", "correct");
// myLog();

// function myLog(a) {
//   console.log(arguments.length, a, arguments[0]);
// }

// // myLog("correct");
// // myLog("also", "correct");

// myLog("this", "is", "some", "argument");

function sum() {
  const count = arguments.length;
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
