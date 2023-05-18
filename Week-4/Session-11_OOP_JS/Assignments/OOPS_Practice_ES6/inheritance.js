// Inheritance:
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`Driving ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

// Create instances of each class
const vehicle = new Vehicle("Toyota", "Supra", 2023, "Red");
const car = new Car("Ford", "Mustang GT", 2022, "Black", 4);
const rideShareCar = new RideShareCar("BMW", "M3 GTR", 2021, "Blue", 4, true);

// Calling the Methods
vehicle.drive();
car.drive();
rideShareCar.drive();
console.log(car.numSeats);
console.log(rideShareCar.isAvailable);
