// let age = 20;
// let height = 5.6;

// if (age > 10 && height > 6.0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// function sum(a, b, ...numbers) {
//   let total = 0;
//   console.log(a, b);
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// console.log(sum(4, 2, 7, 8));

// Write a function that recieves multiple values, and checks if the first value exists in the rest of the list or not..

// console.log(check(2,1,2,3))  return true
// console.log(check(2,1,4,6)) returns false..

// function check(a, ...args) {
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] === a) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(check(2, 1, 2, 3, 8, 4, 9));
// console.log(check(2, 1, 5, 7, 7, 4, 3, 2));

// function updateScore(currentScore, value, bonus) {
//   //   if (bonus) {
//   //     return currentScore + value * bonus;
//   //   } else {
//   //     return currentScore + value;
//   //   }

//   return bonus ? currentScore + value * bonus : currentScore + value;
//   //   bonus here will be either truthy or falsy
// }

// function updateScore(currentScore, value, bonus) {
//   bonus = bonus || 1;
//   return currentScore + value * bonus;
// }

// function updateScore(currentScore, value, bonus) {
//   return currentScore + value * (bonus || 1);
// }

// function updateScore(currentScore, value, bonus = 1) {
//   return currentScore + value * bonus;
// }

// console.log(updateScore(10, 3));
// console.log(updateScore(10, 3, 2));

// var height = "5.6xyz";
// var length = "35 cm";

// // console.log(parseFloat(height));
// // console.log(parseInt(length));

// console.log(isNaN(height));

let s = "The most beautiful. voice in world, is your name";

// function addPeriod(str) {
//   return str.endsWith(".") ? str : str + ".";
// }

// function addPeriod(str) {
//   var lastIndex = str.length - 1;
//   // return str.indexOf(".") !== lastIndex ? str + "." : str;
//   return str.lastIndexOf(".") !== lastIndex ? str + "." : str;
// }

// console.log(addPeriod("Hello.bye."));

// ARRAYS IN JS:

// let arr = [1, 2, 3];

// var i = 0;
// console.log(arr[i++]);
// console.log(arr[++i]);

// console.log(arr[arr.length - 1]);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// let position = [44.123, -89.3455]; // Co ordinates of Keyin college..

// // index notation
// // let lat = position[0];
// // let lng = position[1];

// // Destrcture:IMPORTANT IN REACT TOO...

// let [lat, lng] = position;

// let dateString = "15/05/2024";

// let [day, month, year] = dateString.split("/");

// console.log(
//   "THe day is " + day + " Month is " + month + " the year is " + year
// );

// console.log(
//   `The day is ${day}, and the month is ${month} and the year is ${year}`
// );

// let dateString = "15/05/2024";

// let [day, , year] = dateString.split("/");

// let emailAddress = "asmith@yahoo.com";
// let [, tld] = emailAddress.split(".");

// console.log(tld);

// let arr = [];
// arr.push(10);
// arr.push(20);
// arr.push(30);
// console.log(arr);
// arr.unshift(40);
// console.log(arr);
// arr.unshift(50);
// console.log(arr);
// arr.shift();
// console.log(arr);

// let arr = [1, 2, 3];
// let strArr = arr.join("\n");
// console.log(strArr);
// console.log(strArr.split("\n"));

let list = [1, 2, 3, 4];

// let listCopy = [];

// for (let i = 0; i < list.length; i++) {
//   let element = list[i];
//   element += 3;
//   listCopy.push(element);
// }

// let's do the same by using forEach() method:

// list.forEach(function (element) {
//   listCopy.push(element + 3);
// });

// let's do the same with arrays map function...

// let listCopy = list.map(function (element) {
//   return element + 3;
// });

// let listCopy2 = list.map(function (element) {
//   return element + 3;
// });

// console.log(listCopy2);

// filter() : creates and returns a new array containing only those values that matcha a condition

let listCopy2 = list.filter(function (element) {
  return element > 2;
});

let listCopy3 = list.map(function (element) {
  return element > 2;
});

console.log(listCopy2);
console.log(listCopy3);
