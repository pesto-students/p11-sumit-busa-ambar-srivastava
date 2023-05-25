function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, World!
greet("John"); // Hello, John!

//ES6 function

const Greet = (name = "World") => {
  console.log(`Hello, ${name}!`);
};

Greet(); // Hello, World!
Greet("Johnny"); // Hello, Johnny!
