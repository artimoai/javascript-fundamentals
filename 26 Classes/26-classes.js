/**
 * *    Classes in JavaScript
 *
 * *    are a blueprint for creating distinct objects
 * *    define what properties and methods these objects can have
 * *    use a constructor to assign unique properties
 */

class Player {
  // properties
  name = '';
  score = 0;

  // methods
  pause() {
    console.log(`${this.name} paused the game`);
  }
  exit() {
    console.log(`Game over! Your final score is ${this.score}`);
  }
}

// create a new Player object called PLAYERONE
const PLAYERONE = new Player();
console.log(`Player One has ${PLAYERONE.score} points`); // 0

// modify properties of object PLAYERONE
PLAYERONE.name = window.prompt('Enter Name of Player One');
PLAYERONE.score += 2;

console.log(`Player One is ${PLAYERONE.name}`); // Name entered by user
console.log(`${PLAYERONE.name} has ${PLAYERONE.score} points`); // 2

// run methods of object PLAYERONE
PLAYERONE.pause();
PLAYERONE.exit();

/**
 * *    Constructors
 *
 * *    These are special methods of a class which accept arguments
 * *    and assign properties
 */

class Student {
  // methods
  checkGrades() {
    console.log(`Your GPA is ${this.gpa}`);
  }
  maxGPA() {
    this.gpa = 4.0;
  }
  study() {
    console.log(`Student ${this.name} is studying hard`);
  }
  bio() {
    console.log(
      `Student ${this.name} is ${this.age} years old and has a ${this.gpa} GPA`
    );
  }

  // constructor defines object properties
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
}

// create a new Student object
const STUDENT1 = new Student(studentName(), studentAge(), studentGPA());

// can use some interactive functions to get arguments
function studentName() {
  return window.prompt("What's your Student name?");
}

function studentAge() {
  return window.prompt("What's your Student age?");
}

function studentGPA() {
  return window.prompt("What's your Student GPA?");
}

STUDENT1.bio();
STUDENT1.study();
STUDENT1.maxGPA();
STUDENT1.checkGrades();
STUDENT1.bio();

/**
 * *    The "static" keyword
 */

class Cars {
  // the "static" keyword ensures the class itself has the only copy of this variable
  // this property won't be passed to the objects created
  static totalCarsCreated = 0;
  // consturctor defines object property
  constructor(carModel) {
    this.model = carModel;
    Cars.totalCarsCreated += 1;
  }

  static startRace() {
    console.log(`3..2..1.. GO!`);
  }
}

const CAR1 = new Cars('BMW');
console.log(CAR1);

console.log(`${Cars.totalCarsCreated} cars created so far`);

const CAR2 = new Cars('Audi');
console.log(CAR2);

console.log(`${Cars.totalCarsCreated} cars created so far`);

// CAR1.startRace(); // not a function error
Cars.startRace();
