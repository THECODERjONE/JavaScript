/*
JavaScript is a scripting language you can use to make web pages interactive.
It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.

In this course, you'll learn fundamental programming concepts in JavaScript.
You'll start with basic data structures like numbers and strings.
Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more.
*/

// Im at 47% of the course and just now I realized I sould be feeding GitHub with some of my practice.

// Note that I am adding only the result i give at the page, I am not only copying te instructions of the exercise but my answer inside it aswell.

// Return a Value from a Function with Return:

while (false) {
    function timesFive(n) {
        return alert(n * 5);
    }
    timesFive(5);
    timesFive(2);
    timesFive(0);
}

// Global Scope and Functions

while (false) {
    // Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
  }
  
  // Only change code above this line
  
  function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }    
}

// Local Scope and Functions

while (false) {
    function myLocalScope() {
        // Only change code below this line
      let myVar;
        console.log('inside myLocalScope', myVar);
      }
      myLocalScope();
      
      // Run and check the console
      // myVar is not defined outside of myLocalScope
      console.log('outside myLocalScope', myVar);
}

// Global vs. Local Scope in Functions

while (false) {
   // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
}

// Understanding Undefined Value returned from a Function

while (false) {
    // Setup
    let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum += 5;
}

// Only change code above this line

addThree();
addFive();
}

// Assignment with a Returned Value

while (false) {
    // Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

}

// Stand in Line

while (false) {
    function nextInLine(arr, item) {
        // Only change code below this line
        arr.push(item);
        let shift1 = arr.shift();
        return shift1;
        // Only change code above this line
      }
      
      // Setup
      let testArr = [1, 2, 3, 4, 5];
      
      // Display code
      console.log("Before: " + JSON.stringify(testArr));
      console.log(nextInLine(testArr, 6));
      console.log("After: " + JSON.stringify(testArr));
}

// Understanding Boolean Values

while (false) {
    function welcomeToBooleans() {
        // Only change code below this line
      
        return true; // Change this line
      
        // Only change code above this line
      }
}

// Use Conditional Logic with If Statements

while (false) {
    function trueOrFalse(wasThatTrue) {
        // Only change code below this line
      if (wasThatTrue) {
        return "Yes, that was true";
      }
      return "No, that was false";
      
      
        // Only change code above this line
      
      }
}

// Comparison with the Equality Operator

while (false) {
    // Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
}

// Comparison with the Strict Equality Operator

while (false) {
    // Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
}

// Practice comparing different values

while (false) {
    // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
}

// Comparison with the Inequality Operator

while (false) {
    // Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
}

// Comparison with the Strict Inequality Operator

while (false) {
    // Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
}

// Comparison with the Greater Than Operator

// Ill start to add the instructions from this one forward

//Add the greater than operator to the indicated lines so that the return statements make sense.

while (false) {
    function testGreaterThan(val) {
        if (val > 100) {  // Change this line
          return "Over 100";
        }
      
        if (val > 10) {  // Change this line
          return "Over 10";
        }
      
        return "10 or Under";
      }
      
      testGreaterThan(10);
}

// Comparison with the Greater Than Or Equal To Operator

// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

while (false) {
    function testGreaterOrEqual(val) {
        if (val >= 20) {  // Change this line
          return "20 or Over";
        }
      
        if (val >= 10) {  // Change this line
          return "10 or Over";
        }
      
        return "Less than 10";
      }
      
      testGreaterOrEqual(10);
}

// Comparison with the Less Than Operator

// Add the less than operator to the indicated lines so that the return statements make sense.

while (false) {
    function testLessThan(val) {
        if (val < 25) {  // Change this line
          return "Under 25";
        }
      
        if (val < 55) {  // Change this line
          return "Under 55";
        }
      
        return "55 or Over";
      }
      
      testLessThan(10);
}

// Comparison with the Less Than Or Equal To Operator

//

while (false) {
    function testLessOrEqual(val) {
        if (val <= 12) {  // Change this line
          return "Smaller Than or Equal to 12";
        }
      
        if (val <= 24) {  // Change this line
          return "Smaller Than or Equal to 24";
        }
      
        return "More Than 24";
      }
      
      testLessOrEqual(10);
}

// Comparisons with the Logical And Operator

// Replace the two if statements with one statement, using the && operator, 
// which will return the string Yes if val is less than or equal to 50
// and greater than or equal to 25.
// Otherwise, will return the string No.

while (false) {
    function testLogicalAnd(val) {
        // Only change code below this line
      
        if ((val <= 50) && (val >= 25)) {
          return "Yes";
        }
      
        // Only change code above this line
        return "No";
      }
      
      testLogicalAnd(10);
}

// Comparisons with the Logical Or Operator

// Combine the two if statements into one statement
// which returns the string Outside if val is not between 10 and 20, inclusive. *
// Otherwise, return the string Inside.

// * I got your trap there huh

while (false) {
    function testLogicalOr(val) {
        // Only change code below this line
      
        if ((val < 10) || (val > 20)) {
          return "Outside";
        }
      
        // Only change code above this line
        return "Inside";
      }
      
      testLogicalOr(15);
}

// Introducing Else Statements

// Combine the if statements into a single if/else statement.

while (false) {
    function testElse(val) {
        let result = "";
        // Only change code below this line
      
        if (val > 5) {
          result = "Bigger than 5";
        }
      
        else 
          result = "5 or Smaller";
      
        // Only change code above this line
        return result;
      }
      
      testElse(4);
}

// Introducing Else If Statements

// Convert the logic to use else if statements.

while (false) {
    function testElseIf(val) {
        if (val > 10) {
          return "Greater than 10";
        }
      
        else if (val < 5) {
          return "Smaller than 5";
        }
      
        else {
          return "Between 5 and 10";
        }
      }
      
      testElseIf(7);
}

// Logical Order in If Else Statements

// Change the order of logic in the function so that
// it will return the correct statements in all cases.

while (false) {
    function orderMyLogic(val) {
        if (val < 5) {
          return "Less than 5";
        } else if (val < 10) {
          return "Less than 10";
        } else {
          return "Greater than or equal to 10";
        }
      }
      
      orderMyLogic(7);
}

// Chaining If Else Statements

// Write chained if/else if statements to fulfill the following conditions:

// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

while (false) {
    function testSize(num) {
        // Only change code below this line
        if (num < 5) {
          return "Tiny";
        } else if (num < 10) {
          return "Small";
        } else if (num < 15) {
          return "Medium";
        } else if (num < 20) {
          return "Large";
        } else {
          return "Huge";
        }
        // Only change code above this line
      }
      
      testSize(7);
}

// Golf Code

// In the game of Golf, each hole has a par, meaning,
// the average number of strokes a golfer is expected
// to make in order to sink the ball in the hole to complete the play.
// Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments.
// Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive.
// We have added an array of all the names for your convenience.



while (false) {
    const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

    function golfScore(par, strokes) {
      // Only change code below this line
      if (strokes === 1){
        return names[0];
      } else if (strokes <= (par - 2)) {
        return names[1];
      } else if (strokes == (par -1)) {
        return names[2];
      } else if (strokes == par) {
        return names[3];
      } else if (strokes == (par + 1)) {
        return names[4];
      } else if (strokes == (par + 2)) {
        return names[5];
      } 
      return names[6];
      // Only change code above this line
    }
    
    golfScore(5, 4); 
}

// Selecting from Many Options with Switch Statements

// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

while (false) {
    function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break; 
    case 4:                 
      answer = "delta";      
      break;                
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);
}

// Adding a Default Option in Switch Statements

// Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff

while (false) {
    function switchOfStuff(val) {
        let answer = "";
        // Only change code below this line
        switch (val) {          // I was wrongly using "switch (switchOfValue) {}"
          case "a":
            answer = "apple";
            break;
          case "b":
            answer = "bird";
            break;
          case "c":
            answer = "cat";
            break;
          default:
            answer = "stuff";
            break;
        }
      
      
        // Only change code above this line
        return answer;
      }
      
      switchOfStuff(1);
}

// Multiple Identical Options in Switch Statements

// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// Note: You will need to have a case statement for each number in the range.

while (false) {
    function sequentialSizes(val) {
        let answer = "";
        // Only change code below this line
        switch (val){
          case 1:
          case 2:
          case 3:
            answer = "Low";
            break;
          case 4:
          case 5:
          case 6:
            answer = "Mid";
            break;
          case 7:
          case 8:
          case 9:
            answer = "High";
            break;
        }
      
      
        // Only change code above this line
        return answer;
      }
      
      sequentialSizes(1);
}

// Replacing If Else Chains with Switch

// Change the chained if/else if statements into a switch statement.

while (false) {
    function chainToSwitch(val) {
        let answer = "";
        // Only change code below this line
        switch (val) {
          case "bob":
          answer = "Marley";
            break;
          case 42:
          answer = "The Answer";
            break;
          case 1:
          answer = "There is no #1";
            break;
          case 99:
          answer = "Missed me by this much!";
            break;
          case 7:
          answer = "Ate Nine";
            break;
        }
        // Only change code above this line
        return answer;
      }
      
      chainToSwitch(7);    
}

// Returning Boolean Values from Functions

// Fix the function isLess to remove the if/else statements.

while (false) {
    function isLess(a, b) {
        // Only change code below this line
        return a < b;
        // Only change code above this line
      }
      
      isLess(10, 15);
}

// Return Early Pattern for Functions

// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Hint
// Remember that undefined is a keyword, not a string.

while (false) {
    // Setup
function abTest(a, b) {
    // Only change code below this line
  if ((a < 0) || (b < 0)){
      return undefined;
  }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
}

// Counting Cards

// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player.
// Each card is assigned a value according to the table below.
// When the count is positive, the player should bet high.
// When the count is zero or negative, the player should bet low.

// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Outputs: -3 Hold or 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

while (false) {
    let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
    // This part is apparently useless
//   case 7:
//   case 8:
//   case 9:
//     count = count;
//     break;
    // Yeah that part
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
  return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
}

// Build JavaScript Objects

// Make an object that represents a dog called myDog
// which contains the properties name (a string), legs, tails and friends.

// You can set these object properties to whatever values you want,
// as long as name is a string, legs and tails are numbers, and friends is an array.

while (false) {
    const myDog = {
        // Only change code below this line
      name: "Dogname",
      legs: 4,
      tails: 1,
      friends: ["Woof", "German", "Silba"]
        // Only change code above this line
      }; 
}

// Accessing Object Properties with Dot Notation

// Read in the property values of testObj using dot notation.
// Set the variable hatValue equal to the object's property hat and
// set the variable shirtValue equal to the object's property shirt.

while (false) {
    // Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line
}

// Accessing Object Properties with Bracket Notation

// Read the values of the properties an entree and
// the drink of testObj using bracket notation and
// assign them to entreeValue and drinkValue respectively.

while (false) {
    // Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line
}

// Accessing Object Properties with Variables

// Set the playerNumber variable to 16.
// Then, use the variable to look up the player's name and assign it to player.

while (false) {
    // Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line
}

// Updating Object Properties

// Update the myDog object's name property.
// Let's change her name from Coder to Happy Coder.
// You can use either dot or bracket notation.

while (false) {
    // Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  
  myDog.name = "Happy Coder";
}

// Add New Properties to a JavaScript Object

// Add a bark property to myDog and set it to a dog sound, such as "woof".
// You may use either dot or bracket notation.

while (false) {
    const myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
      };
      
      myDog.bark = "woof";
      
}

// Delete Properties from a JavaScript Object

// Delete the tails property from myDog. You may use either dot or bracket notation.

while (false) {
    // Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails;
}

// Using Objects for Lookups

// Convert the switch statement into an object called lookup.
// Use it to look up val and assign the associated string to the result variable.

while (false) {
    // Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    let lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");
}

// Testing Objects for Properties

// Modify the function checkObj to test if the object passed to the function parameter obj
// contains the specific property passed to the function parameter checkProp.
// If the property passed to checkProp is found on obj, return that property's value.
// If not, return Not Found.



while (false) {
  function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];                      // I should practice this one
    }
    else return "Not Found";
    // Only change code above this line
  }
}

// Manipulating Complex Objects

// Add a new album to the myMusic array.
// Add artist and title strings, release_year number, and a formats array of strings.

while (false) {
  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
  
  myMusic.unshift(
    {
      "artist": "Nujabes",
      "title": "Departure",
      "release_year": 2004,
      "formats": [
        "CD",
        "Album",
        "mp3",
      ]
    }
  )
}

// Accessing Nested Objects

// Access the myStorage object and assign the contents of the glove box property
// to the gloveBoxContents variable. Use dot notation for all properties where possible,
// otherwise use bracket notation.


while (false) {
  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside['glove box'];
}

// Accessing Nested Arrays


// Using dot and bracket notation, set the variable secondTree to the second
// item in the trees list from the myPlants object.



while (false) {
  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
}

// Record Collection

/*
You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object. 
*/

while (false) {
  // Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
}

// Iterate with JavaScript While Loops

// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

while (false) {
  // Setup
const myArray = [];

// Only change code below this line
let i= 0;

while (i <= 5){
  myArray.unshift(i);
  i++;
}
}

// Iterate with JavaScript For Loops

// Use a for loop to push the values 1 through 5 onto myArray.

while (false) {
// Setup
const myArray = [];

// Only change code below this line
for (let n = 0; /*myArray !== [1, 2, 3, 4, 5]*/; n++) {  // This shouldnt be used this way 
  if ((n !== 0) && (n <= 5)) {
    myArray.push(n);
  }
}
}

// *********** They propose this: ***********

var ourArray = [];              // This part is just
for (var i = 0; i < 5; i++) {   // the explanation part,
  ourArray.push(i);             // not the result
}                               // that they juggest.

var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

// Iterate Odd Numbers With a For Loop

// Push the odd numbers from 1 through 9 to myArray using a for loop.

while (false) {
// Setup
const myArray = [];

// Only change code below this line
for (let n = 0; n <= 9; n++) {
  if ((n !== 0) && (n % 2 !== 0)) {
    myArray.push(n);
  }
}
}

/* They would have done like this
// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
*/

/* I woudl do this way if I were to forcefully count every 2
// Setup
const myArray = [];

// Only change code below this line
for (let n = 0; n <= 9; n++) {
  if (n !== 0) {
    myArray.push(n);
    n++;
  }
}
*/

// Count Backwards With a For Loop

// Push the odd numbers from 9 through 1 to myArray using a for loop.

while (false) {
  // Setup
const myArray = [];

// Only change code below this line
for (let n = 10; n > 0; n -= 2) {
  if ((n % 2) == 0) {
    --n;
  }
  myArray.push(n);
}
}

// Iterate Through an Array with a For Loop

// Declare and initialize a variable total to 0.
// Use a for loop to add the value of each element of the myArr array to total.

while (false) {
  // Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let n = 0; n < myArr.length; n++) {
  total = total + myArr[n];
}
}

// Nesting For Loops

// Modify function multiplyAll so that
// it returns the product of all the numbers in the sub-arrays of arr.

while (false) {
  function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let c = 0; c < arr.length; c++) {
    for (let s = 0; s < arr[c].length; s++) {   // I need to practice arrays much more.
      product = product * arr[c][s];
    }
  }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
}

// Iterate with JavaScript Do...While Loops

// Change the while loop in the code to a do... while loop so the loop
// will push only the number 10 to myArray, and i will be equal to 11
// when your code has finished running.

while (false) {
  // Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 10);
}

// Replace Loops using Recursion

// Write a recursive function, sum(arr, n), that returns
// the sum of the first n elements of an array arr.

while (false) {
  function sum(arr, n) {
    // Only change code below this line
    if(n <= 0) {
      return 0;
    } else { 
      return sum(arr, n - 1) + arr[(n - 1)];
    }
    // Only change code above this line
  }
}

// Profile Lookup

/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

while (false) {
  // Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let n = 0; n < contacts.length ; n++) {
    if (contacts[n].firstName === name) {
      if (contacts[n].hasOwnProperty(prop)) {
        return contacts[n][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
}

// Generate Random Fractions with JavaScript

// Change randomFraction to return a random number instead of returning 0.

while (false) {
  function randomFraction() {

    // Only change code below this line
  
    return Math.random();  // I only had to paste the function.
  
    // Only change code above this line
  }
}

// Generate Random Whole Numbers with JavaScript

// Use this technique to generate and return a random whole number in the range from 0 to 9.

while (false) {
  function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }
}

// Generate Random Whole Numbers within a Range

// Create a function called randomRange that takes a range myMin and myMax
// and returns a random whole number that's greater than or equal to myMin and
// less than or equal to myMax.

while (false) {
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
}

// Use the parseInt Function

// Use parseInt() in the convertToInteger function so
// it converts the input string str into an integer, and returns it.

while (false) {
  function convertToInteger(str) {
    return parseInt(str);
   }
   
   convertToInteger("56");
}

// Use the parseInt Function with a Radix

// Use parseInt() in the convertToInteger function so
// it converts a binary number to an integer and returns it.

while (false) {
  function convertToInteger(str) {
    return parseInt(str, 2)
  }
  
  convertToInteger("10011");
}

// Use the Conditional (Ternary) Operator

/*
Use the conditional operator in the checkEqual function to check if
two numbers are equal or not.
The function should return either the string Equal or the string Not Equal.
*/ 

while (false) {
  function checkEqual(a, b) {
    return (a === b) ? "Equal" : "Not Equal"
   }
   
   checkEqual(1, 2);
}

// Use Multiple Conditional (Ternary) Operators

/*
In the checkSign function, use multiple conditional operators
- following the recommended format used in findGreaterOrEqual - 
to check if a number is positive, negative or zero.
The function should return positive, negative or zero.
*/ 

while (false) {
  function checkSign(num) {
    return (num > 0) ? "positive"
    : (num === 0) ? "zero"
    : "negative";
    }
    
    checkSign(10);
}

// Use Recursion to Create a Countdown

/*
We have defined a function called countdown with one parameter (n).
The function should use recursion to return an array containing the integers
n through 1 based on the n parameter. If the function is called with a number less than 1,
the function should return an empty array. For example,
calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
Your function must use recursion by calling itself and must not use loops of any kind.
*/ 

while (false) {
  // Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    let counter = countdown(n - 1);
    counter.unshift(n);               // I had to look at the example and the answer; was using .push
    return counter;
  }

}
// Only change code above this line
}

// Use Recursion to Create a Range of Numbers

/*
We have defined a function named rangeOfNumbers with two parameters.
The function should return an array of integers which begins with a number
represented by the startNum parameter and ends with a number
represented by the endNum parameter.
The starting number will always be less than or equal to the ending number.
Your function must use recursion by calling itself and not use loops of any kind.
It should also work for cases where both startNum and endNum are the same.
*/ 

while (false) {
  function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return []
    } else {
      let insertN = rangeOfNumbers(startNum, endNum -1);  // Nearly 99% copied.
      insertN.push(endNum);
      return insertN;
    }
  };
}