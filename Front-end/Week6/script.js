class Student {
  // contains data and functions

  constructor(f, l, a) {
    this.firstName = f;
    this.lastName = l;
    this.age = a;
  }

  setName(f, l, a) {
    this.firstName = f;
    this.lastName = l;
    this.age = a;
  }
  getName() {
    return `First Name:${this.firstName},Last Name:${this.lastName}, Age:${this.age}`;
  }

  setAge(x) {
    this.age = x;
  }
}

// to create object of this class

let std1 = new Student("Alan", "Smith", 20);
console.log(std1.getName());
std1.setName("Bob", "Fraser", 21);
console.log(std1.getName());
