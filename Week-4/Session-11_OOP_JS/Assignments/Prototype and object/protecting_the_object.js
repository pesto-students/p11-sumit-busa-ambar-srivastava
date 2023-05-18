const person = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",

  getAge() {
    return this.age;
  },

  setAge(newAge) {
    this.age = newAge;
  },
};

Object.defineProperty(person, "name", { writable: false });
Object.defineProperty(person, "email", { writable: false });
Object.defineProperty(person, "age", { writable: true, value: 27 });

console.log(person.name);
console.log(person.email);
console.log(person.age);
