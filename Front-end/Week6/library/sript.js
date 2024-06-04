class Employee {
  //member variables
  firstName;
  lastName;

  //member functions/methods(oop term)

  printName() {
    console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}`);
  }

  setName(f, l) {
    this.firstName = f;
    this.lastName = l;
  }
  getLastName() {
    return this.lastName;
  }
}
// I cannot use this class UNLESS I create object of this class.

let emp1 = new Employee();
let emp2 = new Employee();

emp1.setName("Christina", "Lee");
emp2.setName("Doug", "Morris");

console.log(emp2.getLastName()); //Morris
console.log(emp1.getLastName()); //Lee

emp1.printName();
emp2.printName();

// Write a class Person that has four variables, name, age, phone,email
// 3 member functions/methods, one "setValues()" for setting up the values for an object
//  one "getName()" for getting the name in a particular string format, like "Name:xxxx,Age:xx,Phone:xxxxxxx,Email:xxxxxxxx"
// one "setEmail()",for updating the email of the any particular user - just email....
