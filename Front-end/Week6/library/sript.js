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

// class Rectangle {
//   static x = 10;
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   getArea() {
//     return this.height * this.width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }

//   static test() {
//     console.log("Hello from static test");
//   }
// }

// let obj1 = new Rectangle();
// // obj1.getArea(); //yes
// // obj1.calcArea(); //yes
// // obj1.test();
// console.log(Rectangle.x);

// class Student {
//   static count = 10; //static variable initized with 0..ONLY EXECUTED FOR THE FIRST TIME AND NEVER EXECUTES AGAIN
//   constructor(n, g, s) {
//     this.name = n;
//     this.grade = g;
//     this.school = s;
//     Student.count++;
//   }

//   getDetails() {
//     return `Name: ${this.name}, Grade: ${this.grade}, School:${this.school}`;
//   }
// }

// let std1 = new Student("Alan Smith", "A", "Keyin College");
// let std2 = new Student("Alan Smith", "A", "Keyin College");
// let std3 = new Student("Alan Smith", "A", "Keyin College");
// let std4 = new Student("Alan Smith", "A", "Keyin College");
// let std5 = new Student("Alan Smith", "A", "Keyin College");
// let std6 = new Student("Alan Smith", "A", "Keyin College");

// console.log(Student.count);

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   getDescription() {
//     return `${this.year} ${this.model} ${this.make}`;
//   }
//   static isVintage(car) {
//     return car.year < 1990;
//   }
// }

// let car1 = new Car("Toyota", "Corolla", 1985);
// let car2 = new Car("Honda", "Odyssey", 2020);

// console.log(Car.isVintage(car1));
// console.log(Car.isVintage(car2));

class BankAccount {
  static accountCount = 0;
  static depositCount = 0;
  static withdrawCount = 0;
  constructor(accountNumber, holderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
    BankAccount.accountCount++;
  }

  deposit(amount) {
    this.balance += amount;
    BankAccount.depositCount++;
    this.count++;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
    BankAccount.withdrawCount++;
  }
}

let account1 = new BankAccount("1234", "John Doe", 10000);
let account2 = new BankAccount("1235", "Kyle Hollett", 25);
let account3 = new BankAccount("1236", "Bradley", -3000);

account1.deposit(5000);
account1.withdraw(7000);
account2.deposit(10000);
account3.deposit(40000);

console.log(BankAccount.accountCount);
console.log(BankAccount.depositCount);
console.log(BankAccount.withdrawCount);
