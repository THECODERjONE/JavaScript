// OOP, or Object Oriented Programming, is one of the major approaches to the software development process.
// In OOP, objects and classes organize code to describe things and what they can do.

// In this course, you'll learn the basic principles of OOP in JavaScript, including the this keyword, prototype chains,
// constructors, and inheritance.



// Create a Basic JavaScript Object

/*
Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
*/

while (false) {
    let dog = {
        name: 'Doggo',
        numLegs: 2
      };
}

// Use Dot Notation to Access the Properties of an Object

// Print both properties of the dog object to your console.

while (false) {
    let dog = {
        name: "Spot",
        numLegs: 4
      };
      // Only change code below this line
      console.log(dog.name);
      console.log(dog.numLegs)
}

// Create a Method on an Object

// Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

while (false) {
    let dog = {
        name: "Spot",
        numLegs: 4,
       sayLegs: function() {return 'This dog has ' + dog.numLegs + ' legs.';}
      };
      
      dog.sayLegs();    
}

// Make Code More Reusable with the this Keyword

// Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.

while (false) {
    let dog = {
        name: "Spot",
        numLegs: 4,
        sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
      };
      
      dog.sayLegs();
}

// Define a Constructor Function

// Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

while (false) {
    function Dog() {
        this.name = 'Doggo';
        this.color = 'Black';
        this.numLegs = 4;
      }
}

// Use a Constructor to Create Objects

// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

while (false) {
    function Dog() {
        this.name = "Rupert";
        this.color = "brown";
        this.numLegs = 4;
      }
      // Only change code below this line
      let hound = new Dog();                                        // I forgot the "let"
}

// Extend Constructors to Receive Arguments

/*
Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4.
Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
*/

while (false) {
    function Dog(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
        }
        
        let terrier = new Dog('Fuzzo', 'Light Grey');
}

// Verify an Object's Constructor with instanceof

// Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

while (false) {
    function House(numBedrooms) {
        this.numBedrooms = numBedrooms;
      }
      // Only change code below this line
      
      let myHouse = new House(2);
      
      myHouse instanceof House;
}

// Understand Own Properties

// Add the own properties of canary to the array ownProps.

while (false) {
    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird("Tweety");
      let ownProps = [];
      // Only change code below this line
      for (let property in canary) {
        if(canary.hasOwnProperty(property)) {
          ownProps.push(property);
        }
      }
}

// Use Prototype Properties to Reduce Duplicate Code

// Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.
// Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype.

while (false) {
    function Dog(name) {
        this.name = name;
      }
      Dog.prototype.numLegs = 4;                              // I tested and you can insert this inside the object; its worse for most cases.
      
      
      // Only change code above this line
      let beagle = new Dog("Snoopy");
}

// Iterate Over All Properties

// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

while (false) {
    function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype.numLegs = 4;
      
      let beagle = new Dog("Snoopy");
      
      let ownProps = [];
      let prototypeProps = [];
      
      // Only change code below this line
      
      for(let prop in beagle) {
        if(beagle.hasOwnProperty(prop)) {
          ownProps.push(prop);
        } else {
          prototypeProps.push(prop);
        }
      }
}

// Understand the Constructor Property

/*
Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property,
return true if the candidate is a Dog, otherwise return false.
*/

while (false) {
  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
  }
}

// Change the Prototype to a New Object

// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

while (false) {
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log('nom nom nom');
  },
  describe: function() {
    console.log('My name is' + this.name);
  }
  };
}

// Remember to Set the Constructor Property when Changing the Prototype

// Define the constructor property on the Dog prototype.

while (false) {
  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
}

// Understand Where an Object’s Prototype Comes From

// Use isPrototypeOf to check the prototype of beagle.

while (false) {
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  
  Dog.prototype.isPrototypeOf(beagle);
}

// Understand the Prototype Chain

// Modify the code to show the correct prototype chain.

while (false) {
  function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);
}

// Use Inheritance So You Don't Repeat Yourself

// The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

while (false) {
  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };
}

// Inherit Behaviors from a Supertype

// Use Object.create to make two instances of Animal named duck and beagle.

while (false) {
  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
}

// Set the Child's Prototype to an Instance of the Parent

// Modify the code so that instances of Dog inherit from Animal.

while (false) {
  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
}

// Reset an Inherited Constructor Property

// Fix the code so duck.constructor and beagle.constructor return their respective constructors.

while (false) {
  function Animal() { }
  function Bird() { }
  function Dog() { }
  
  Bird.prototype = Object.create(Animal.prototype);
  Dog.prototype = Object.create(Animal.prototype);
  
  // Only change code below this line
  
  Bird.prototype.constructor = Bird;
  Dog.prototype.constructor = Dog;
  
  let duck = new Bird();
  let beagle = new Dog();  
}

// Add Methods After Inheritance

/*
Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.
*/

while (false) {
  function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {console.log('Woof!')};
// Only change code above this line

let beagle = new Dog();
}

// Override Inherited Methods

// Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

while (false) {
  function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function(){
  return 'Alas, this is a flightless bird.';
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
}

// Use a Mixin to Add Common Behavior Between Unrelated Objects

// Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

while (false) {
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  
  let glideMixin = function(object) {
    object.glide = function() {
      console.log(object.type + ' is gliding!');
    }
  };
  
  glideMixin(boat);
  glideMixin(bird);
  
  bird.glide();
}

// Use Closure to Protect Properties Within an Object from Being Modified Externally

// Change how weight is declared in the Bird function so it is a private variable.
// Then, create a method getWeight that returns the value of weight 15.

while (false) {
  
}