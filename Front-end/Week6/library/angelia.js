class Person {
  personName;
  personAge;
  personPhone;
  personEmail;

  setValues(n, a, p, e) {
    this.personName = n;
    this.personAge = a;
    this.personPhone = p;
    this.personEmail = e;
  }

  getValues() {
    return (
      "Name: " +
      this.personName +
      "Age: " +
      this.personAge +
      "Phone: " +
      this.personPhone +
      "Email: " +
      this.personEmail
    );
  }

  setEmail(e) {
    this.personEmail = e;
  }
}

let person1 = new Person();
person1.setValues("Alan SMith", 20, 12344565, "alan@gmail.com");
console.log(person1.getValues());
person1.setEmail("bob@gmail.com");
console.log(person1.getValues());
person1.setValues("Christina", 19, 2222222, "christian@gmail.com");
console.log(person1.getValues());
