// let myArr = [10, 23, 1, 2];

// console.log(myArr[0]);

let obj2 = { course: "JavaScript", college: "Keyin", semester: "two" };

// // array notation!
// console.log(obj2["course"]); //JavaScript
// console.log(obj2["college"]);
// console.log(obj2["semester"]);

// // dot notation

// console.log(obj2.course);
// console.log(obj2.college);
// console.log(obj2.semester);

// console.log(obj2.@for); //never allowed
// console.log(obj2["@for"]); //never mind this

// position of keyin college on map

// let lat = 43.1234;
// let lng = -80.1234;

// let keyin = [43.1234, -80.1234];

// console.log(keyin[0], keyin[1]);

// let keyin1 = { lat: 43.1234, lng: -80.1234 };

// console.log(keyin1.lng);
// console.log(keyin1.lat);

// let positions = [
//   { lat: 43.1234, lng: -80.1234 },
//   { lat: 54.1234, lng: -10.1234 },
//   { lat: 44.1234, lng: -70.1234 },
//   { lat: 64.1234, lng: -40.1234 },
//   { lat: 84.1234, lng: -70.1234 },
// ];

// positions.forEach(function (value) {
//   console.log(value.lng);
// });

// let user = {
//   firstName: "Alan",
//   lastName: "Smith",
//   email: "alan@gmail.com",
//   loggedIn: false,
//   level: 3,
// };

// function login(user) {
//   user.loggedIn = true;
// }

// console.log(user);
// login(user);
// console.log(user);

// let users = [
//   {
//     firstName: "Alan",
//     lastName: "Smith",
//     email: "alan@gmail.com",
//     loggedIn: false,
//     level: 3,
//   },
//   {
//     firstName: "Brian",
//     lastName: "Smith",
//     email: "brian@gmail.com",
//     loggedIn: true,
//     level: 5,
//   },
//   {
//     firstName: "Christina",
//     lastName: "Smith",
//     email: "christina@gmail.com",
//     loggedIn: false,
//     level: 6,
//   },
// ];

// // for (let i = 0; i < users.length; i++) {
// //   console.log(users[i].email);
// // }

// users.forEach(function (user) {
//   console.log(user.email);
// });

// let user = {
//   firstName: "Alan",
//   lastName: "Smith",
//   loggedIn: false,
//   age: 20,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
//   hobbies: ["reading", "cycling"],
//   pref: {
//     color: "red",
//     model: "volvo",
//   },
// };

// console.log(user);
// user.login();
// console.log(user);
// user.logout();
// console.log(user);

// Constructor function:that can be used to create objects- rather than writing code for each object separately we write a prototype function and use it to create as many objext object...

// its name starts with capital letter!

function User(f, l, a) {
  this.firstName = f;
  this.lastName = l;
  this.age = a;
  this.loggedIn = true;
  this.program = "Software";
  this.college = "Keyin";
}

User.prototype.login = function () {
  this.loggedIn = true;
};

User.prototype.logout = function () {
  this.loggedIn = false;
};

let user1 = new User("Alan", "Smith", 20);
console.log(user1);
user1.logout();
console.log(user1);
