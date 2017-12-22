// declare a class
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");


// class inherite
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// each member default to be public
// When a member is marked private, it cannot be accessed from outside

class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Error: 'name' is private;
