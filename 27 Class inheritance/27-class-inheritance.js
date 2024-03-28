/**
 * *    Class inhertiance in JavaScript
 *
 * *    A child class can inherit all the properties and methods of another class
 */

class Animals {
  alive = true;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`An animal named ${this.name} is eating.`);
  }
  sleep() {
    console.log(`An animal named ${this.name} is sleeping.`);
  }
}

class Rabbit extends Animals {
  jump() {
    console.log(`A rabbit named ${this.name} is jumping.`);
  }
}

class Fish extends Animals {
  swim() {
    console.log(`A fish named ${this.name} is swiming.`);
  }
}

class Bird extends Animals {
  fly() {
    console.log(`A bird named ${this.name} is flying.`);
  }
}

const RABBIT1 = new Rabbit('Max', 1);
const FISH1 = new Fish('Clown', 2);
const BIRD1 = new Bird('Duke', 3);

console.log(RABBIT1.alive);
console.log(RABBIT1.name);
console.log(RABBIT1.age);
RABBIT1.jump();
RABBIT1.eat();
RABBIT1.sleep();

/**
 * *    The "super" keyword
 *
 * *    Commonly used to invoke the constructor of a parent class
 */

class Ant extends Animals {
  constructor(name, age, antSize, antTotal) {
    // invoke the super constructor of the parent class
    super(name, age);
    this.size = antSize;
    this.total = antTotal;
  }
  forage() {
    console.log(`An ant named ${this.name} is looking for food.`);
  }
}

const ANT1 = new Ant('Rocky', 1.5, 'small', 1000);

console.log(ANT1.alive);
console.log(ANT1.name);
console.log(ANT1.age);
console.log(ANT1.size);
console.log(ANT1.total);

ANT1.forage();
ANT1.eat();
ANT1.sleep();
