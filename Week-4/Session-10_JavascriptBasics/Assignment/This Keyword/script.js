class Person {
  constructor(Name, Age, Gender, Nationality) {
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
    this.Nationality = Nationality;
  }

  introduce() {
    return `Hello, My name is ${this.Name}. I am ${this.Age} years old, ${this.Gender}, and I am from ${this.Nationality}.`;
  }
}

const person1 = new Person("John", 25, "Male", "American");
const person2 = new Person("Jane", 30, "Female", "Canadian");
const person3 = new Person("Bob", 20, "Male", "Australian");

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

class Student extends Person {
  constructor(Name, Age, Gender, Nationality, Subject) {
    super(Name, Age, Gender, Nationality);
    this.Subject = Subject;
  }

  study() {
    return `I am studying ${this.Subject}.`;
  }
}

const student = new Student(
  "Sarah",
  18,
  "female",
  "British",
  "Computer Science"
);

console.log(student.introduce());
console.log(student.study());
