/**
 * *    Array of Objects in JavaScript
 */

class Car {
  constructor(make, year, color) {
    this.make = make;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`You are driving a ${this.make}`);
  }
}

const CAR100 = new Car('Tesla', 2020, 'red');
const CAR200 = new Car('BMW', 2019, 'blue');
const CAR300 = new Car('Skoda', 2017, 'black');

function displayInfo(car) {
  console.log(`${car.make} | ${car.year} | ${car.color}`);
}

displayInfo(CAR100);
displayInfo(CAR200);
displayInfo(CAR300);
CAR200.drive();

function changeCarColor(car, newColor) {
  car.color = newColor;
}

changeCarColor(CAR300, 'gold');
displayInfo(CAR300);
CAR300.drive();

// Put all car objects in the garage
let carGarage = [CAR100, CAR200, CAR300];
console.log('All cars are in the garage.');

// Acces each car by the array index
console.log(`The first car in the garage: ${carGarage[0].make}`);
console.log(`The second car in the garage: ${carGarage[1].make}`);
console.log(`The third car in the garage: ${carGarage[2].make}`);

// Define function to loop over all the cars in the garage
// and access their drive() method
function startRace(cars) {
  console.log('The race has started!');
  for (const car of cars) {
    car.drive();
  }
}

startRace(carGarage);
