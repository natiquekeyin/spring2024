class Person {
  name;
  age;
  phone;
  email;

  setValues(N, A, P, E) {
    this.name = N;
    this.age = A;
    this.phone = P;
    this.email = E;
  }

  getValues() {
    return `Name:${this.name}, Age:${this.age}, Phone:${this.phone}, Email:${this.email}`;
  }

  setEmail(x) {
    this.email = x;
  }
}

let obj1 = new Person();
obj1.setValues("Ardent", 21, 123233, "ardent@keyin.com");
console.log(obj1.getValues());
obj1.setEmail("pardy@gmail.com");
console.log(obj1.getValues());
