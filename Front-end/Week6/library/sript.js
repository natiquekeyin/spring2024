// class Employee {
//   //member variables
//   firstName;
//   lastName;

//   //member functions/methods(oop term)

//   printName() {
//     console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}`);
//   }

//   setName(f, l) {
//     this.firstName = f;
//     this.lastName = l;
//   }
//   getLastName() {
//     return this.lastName;
//   }
// }
// // I cannot use this class UNLESS I create object of this class.

// let emp1 = new Employee();
// let emp2 = new Employee();

// emp1.setName("Christina", "Lee");
// emp2.setName("Doug", "Morris");

// console.log(emp2.getLastName()); //Morris
// console.log(emp1.getLastName()); //Lee

// emp1.printName();
// emp2.printName();

// Write a class Person that has four variables, name, age, phone,email
// 3 member functions/methods, one "setValues()" for setting up the values for an object
//  one "getName()" for getting the name in a particular string format, like "Name:xxxx,Age:xx,Phone:xxxxxxx,Email:xxxxxxxx"
// one "setEmail()",for updating the email of the any particular user - just email....

// class Person {
//   name;
//   age;
//   phone;
//   email;

//   // constructor() {
//   //   this.name = "Alan Smith";
//   //   this.age = 20;
//   //   this.phone = 12434455;
//   //   this.email = "alan@gmail.com";
//   // }

//   constructor(n, a, p, e) {
//     this.name = n;
//     this.age = a;
//     this.phone = p;
//     this.email = e;
//   }

//   setValues(n, a, p, e) {
//     this.name = n;
//     this.age = a;
//     this.phone = p;
//     this.email = e;
//   }
// }

// let p1 = new Person();
// p1.setValues("a", 12, 122343, "a@gmail.com");
// p1.setValues("Xyx", 20);
// console.log(p1);

class Rectangle {
  static x = 10;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }

  calcArea() {
    return this.height * this.width;
  }

  static test() {
    console.log("Hello from static test");
  }
}

let obj1 = new Rectangle();
// obj1.getArea(); //yes
// obj1.calcArea(); //yes
// obj1.test();
console.log(Rectangle.x);
