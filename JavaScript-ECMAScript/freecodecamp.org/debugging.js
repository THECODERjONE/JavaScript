// Use the JavaScript Console to Check the Value of a Variable

// Use the console.log() method to print the value of the variable a where noted in the code.

while (false) {
    let a = 5;
    let b = 1;
    a++;
    // Only change code below this line


    let sumAB = a + b;
    console.log(a);
}

// Understanding the Differences between the freeCodeCamp and Browser Console

// First, open your browser console so you can see the logs.
// To do that, you can right-click the freeCodeCamp navigation bar at the top
// and click inspect on most browsers. Then find the console tab in the window that opens.

// After that, use console.log to log the output variable.
// View the two consoles to see the log. Finally, use console.clear after your log
// to clear the browser console. View the difference in the two consoles.

while (false) {
    let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();
}

// Use typeof to Check the Type of a Variable

// Add two console.log() statements to check the typeof each of the two variables seven and three in the code.

while (false) {
    let seven = 7;
    let three = "3";
    console.log(seven + three);
    // Only change code below this line

    console.log(typeof(seven));

    console.log(typeof(three));
}

// Catch Misspelled Variable and Function Names

// Fix the two spelling errors in the code so the netWorkingCapital calculation works.

while (false) {
    let receivables = 10;
    let payables = 8;
    let netWorkingCapital = receivables - payables;
    console.log(`Net working capital is: ${netWorkingCapital}`);
}

// Catch Unclosed Parentheses, Brackets, Braces and Quotes

// Fix the two pair errors in the code.

while (false) {
    let myArray = [1, 2, 3];
    let arraySum = myArray.reduce((previous, current) =>  previous + current);  // Did it very clumsy, didn't remember the arrow method.
    console.log(`Sum of array values is: ${arraySum}`);
}

// Catch Mixed Usage of Single and Double Quotes

// Fix the string so it either uses different quotes for the href value, or escape the existing ones.
// Keep the double quote marks around the entire string.

while (false) {
    let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
    console.log(innerHtml);
}

// Catch Use of Assignment Operator Instead of Equality Operator

// Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.

while (false) {
    let x = 7;
    let y = 9;
    let result = "to come";

    if(x === y) {
    result = "Equal!";
    } else {
    result = "Not equal!";
    }

    console.log(result);
}

// Catch Missing Open and Closing Parenthesis After a Function Call

// Fix the code so the variable result is set to the value returned from calling the function getNine.

while (false) {
    function getNine() {
        let x = 6;
        let y = 3;
        return x + y;
      }
      
      let result = getNine();
      console.log(result);
}

// Catch Arguments Passed in the Wrong Order When Calling a Function

// The function raiseToPower raises a base to an exponent.
// Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.

while (false) {
    function raiseToPower(b, e) {
        return Math.pow(b, e);
      }
      
      let base = 2;
      let exp = 3;
      let power = raiseToPower(base, exp);
      console.log(power);
}

// Catch Off By One Errors When Using Indexing

// Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.

while (false) {
    function countToFive() {
        let firstFive = "12345";
        let len = firstFive.length;
        // Only change code below this line
        for (let i = 0; i < len; i++) {
        // Only change code above this line
          console.log(firstFive[i]);
        }
      }
      
      countToFive();
}

// Use Caution When Reinitializing Variables Inside a Loop

// The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes.
// Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized
// (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes,
// which looks like [[0, 0], [0, 0], [0, 0]].

while (false) {
    function zeroArray(m, n) {
        // Creates a 2-D array with m rows and n columns of zeroes
        let newArray = [];
        let row = [];
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
            row.push(0);
          }
          newArray.push(row);
          row = [];
        }
        return newArray;
      }
      let matrix = zeroArray(3, 2);
      console.log(matrix);
}

// Prevent Infinite Loops with a Valid Terminal Condition

// The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false
// (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start.
// Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.

while (false) {
    function myFunc() {
        for (let i = 1; i <= 4; i += 2) {
          console.log("Still going!");
        }
      }
}