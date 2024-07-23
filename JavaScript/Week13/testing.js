// const addPeriod = (str) => {
//   //   return str + ".";
//   //   return str.startsWith(".") ? str : `${str}.`;
//   return `${str}.`;
// };

// const actual = addPeriod("Hello World"); //return Hello World!
// const expected = "Hello World";

// try {
//   if (actual !== expected) {
//     throw new Error("Test not passed");
//   }
// } catch (err) {
//   console.log("Error is " + err);
// }

const getFullName = (fname, lname) => {
  return `${fname}${lname}`;
};

const actualFullName = getFullName("Bob", "Woolmer");
const expected = "BobWoolmer";

if (actualFullName !== expected) {
  throw new Error(`${actualFullName} is not equal to ${expected}`);
}
