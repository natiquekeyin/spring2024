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

let s = "The most beautiful voice in world, is your name";

function addPeriod(str) {
  return str.endsWith(".") ? str : str + ".";
}

console.log(addPeriod(s));
