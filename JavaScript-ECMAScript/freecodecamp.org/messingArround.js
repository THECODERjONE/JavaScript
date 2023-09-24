// Im at 47% of the course and just now I realized I sould be feeding GitHub with some of my practice.

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
    
}