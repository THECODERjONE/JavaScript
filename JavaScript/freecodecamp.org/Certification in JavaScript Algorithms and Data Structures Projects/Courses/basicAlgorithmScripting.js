/*
An algorithm is a series of step-by-step instructions that describe how to do something.

To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.

In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything from converting temperatures
to handling complex 2D arrays.
*/

// Convert Celsius to Fahrenheit

/*
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius.
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

while (false) {
    function convertCtoF(celsius) {
        let fahrenheit = (celsius*(9/5)) + 32;
        return fahrenheit;
      }
      
      convertCtoF(30);
}

// Reverse a String

// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

while (false) {
    function reverseString(str) {
        let reversedString = "";
        for (let i = (str.length -1); i >= 0; i--) {
          reversedString = reversedString + str[i];
        }
        return reversedString;
      }
      
      reverseString("hello");
}

// Factorialize a Number

/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

while (false) {
    function factorialize(num) {
        let numToFactor = 1;
          for (let i = 1; i <= num; i++) {
            numToFactor *= i;
          }
        return numToFactor;
      }
      
      factorialize(5);
}

// Find the Longest Word in a String

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

while (false) {
  function findLongestWordLength(str) {
    let maxCheck = 0;
    let currentCheck = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        if (currentCheck > maxCheck) {
          maxCheck = currentCheck;
        } 
         currentCheck = 0;
      } else {                    // This else drove me crazy... i tend to avoid using them.
      currentCheck++;
      }
    }
    if (currentCheck > maxCheck) {
      maxCheck = currentCheck;
    }
    return maxCheck;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
}

// Return Largest Numbers in Arrays

/*
Return an array consisting of the largest number from each provided sub-array. For simplicity,
the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

while (false) {
  function largestOfFour(arr) {
    let maxSelection = [];
    let currentMax = 0;
    for (let i = 0; i < arr.length; i++) {
      currentMax = arr[i][1];
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > currentMax) {
          currentMax = arr[i][j];
        }
      }
        maxSelection.push(currentMax);
    }
    return maxSelection;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
}

// Confirm the Ending

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

while (false) {
  function confirmEnding(str, target) {
    let strL = str.length;
    let targetL = target.length;
    let auxStr = '';
    for (let i = strL -1; i >= (strL - targetL);
    i--) {
      auxStr = str[i] + auxStr;
    }
    return (auxStr === target);
  }
  
  confirmEnding("Bastian", "n");
}

// Repeat a String Repeat a String

/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

while (false) {
  function repeatStringNumTimes(str, num) {
    let strNumTimes = '';
    if (num <= 0) {
      return strNumTimes;
    } else {
    for (let i = 1; i <= num; i++) {
      strNumTimes += str;
      }
    }
    return strNumTimes;
  }
  repeatStringNumTimes("abc", 3);
}

// Truncate a String

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

while (false) {
  function truncateString(str, num) {
    let strT = '';
    if (num >= str.length) {
      strT = str;
    } else {
      for (let i = 0; i <= num; i++) {
        if (i === num) {
          strT = strT + '...';
        } else {
        strT = strT + str[i];
        }
      }
    }
    return strT;
  }

  truncateString("A-tisket a-tasket A green and yellow basket", 8);
}

// Finders Keepers

/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

while (false) {
  function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i]) === true) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
}

// Boo who

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

while (false) {
  function booWho(bool) {
    let isPrimitiveBoolean;
    (bool === true || bool === false) ?     // Wrongfully implemented it as 'bool === (true || false)' first
    isPrimitiveBoolean = true :
    isPrimitiveBoolean = false;
    return isPrimitiveBoolean
  }

  booWho(null);
}

// Title Case a Sentence

/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

while (false) {
  function titleCase(str) {
    str = str.toLowerCase();
    let upperStr = '';
    for (let i = 0; i<str.length; i++) {
      if (i === 0) {
        upperStr += str[i].toUpperCase();
      } else {
        if (str[(i - 1)] === "'") {
          upperStr += str[i].toLowerCase();
        } else {
          if (str[(i - 1)] === " ") {
            upperStr += str[i].toUpperCase();
        } else {
          upperStr += str[i].toLowerCase();
          }
        }
      }
    }
    return upperStr;      
  } 
  titleCase("I'm a little tea pot");
}
// Once again, I missplaced the return inside the for loop.

// Slice and Splice

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

while (false) {
  function frankenSplice(arr1, arr2, n) {
    let mixedArr = arr2.slice();
    mixedArr.splice(n, 0, ...arr1);
    return mixedArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
}

// Falsy Bouncer

// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

while (false) {
  function bouncer(arr) {
    let arrCopy = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {                           // I thought I needed to use "if(arr[i] === true)"
        arrCopy.push(arr[i]);
      }
    }
    return arrCopy;
  }
  
  bouncer([7, "ate", "", false, 9]);
}

// Where do I Belong

/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20]
and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

while (false) {
  function getIndexToIns(arr, num) {
    let arrCopy = arr.slice();
    arrCopy.push(num);
    arrCopy = arrCopy.sort((a, b) => a - b);
    let numIndex = arrCopy.indexOf(num);
    console.log(arrCopy);
    return numIndex;
  }
  
  getIndexToIns([5, 3, 20, 3], 50);
}

// Mutations

/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

while (false) {
  function mutation(arr) {
    let shareChars = true;
    let arr0 = arr[0].slice();
    arr0 = arr0.toLowerCase();
    let arr1 = arr[1].slice();
    arr1 = arr1.toLowerCase();
    for (let i = 0; i < arr[1].length; i++) {
      if (arr0.indexOf(arr1[i]) < 0) {
        shareChars = false;
      }
    }
    return shareChars;
  }
  
  mutation(["hello", "hey"]);
}

// Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

while (false) {
  function chunkArrayInGroups(arr, size) {
    let auxArr = arr.slice();
    let arrFinal = [];
    for (let i = 0; auxArr.length > 0; i++) {
      let pushArr = auxArr.splice(0, size,);
      arrFinal.push(pushArr);
    }
    return arrFinal;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
}