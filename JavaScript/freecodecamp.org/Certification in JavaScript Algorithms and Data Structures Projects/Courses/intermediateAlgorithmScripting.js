/* Now that you know the basics of algorithmic thinking, along with OOP and Functional Programming,
test your skills with the Intermediate Algorithm Scripting challenges.*/



// Sum All Numbers in a Range

/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/

while (false) {
    function sumAll(arr) {
        let sumRange = 0;
        for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
            sumRange += i;
        }
        return sumRange;
      }
      
      sumAll([1, 4]);
}

// Diff Two Arrays

/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/

while (false) {
    function diffArray(arr1, arr2) {
        const arr1In2 = arr1.filter(item => !arr2.includes(item));
        const arr2In1 = arr2.filter(item => !arr1.includes(item));
        const symmetricDiff = arr1In2.concat(arr2In1);
        return symmetricDiff;
      }
      
      diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
}

/*
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
In a better way.
*/


// Seek and Destroy

/*
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function.
You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
*/

while (false) {
  function destroyer(arr, ...args) {
    return arr.filter(item => !args.includes(item));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
}

// Wherefore art thou

/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching
name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection
if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array
(the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

while (false) {
  function whatIsInAName(collection, source) {
    let auxArr = collection.slice();
    return auxArr.filter(obj => {
      return Object.keys(source).every(key => {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
        })
      });
    };
    
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
}

// Spinal Tap Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

while (false) {
  function spinalCase(str) {
    str = str.replace(/[\s_]/g, '-');
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    return str.toLowerCase();
    }

  spinalCase('This Is Spinal Tap');
}

// Pig Latin

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

while (false) {
  function translatePigLatin(str) {
    const consonantCluster = str.match(/^[^aeiou]+/);
    if(consonantCluster) {
      const firstPart = str.substr(consonantCluster[0].length);
      return firstPart + consonantCluster[0] + 'ay';
      } else {    
          return str + 'way';
          }
    }
  
  translatePigLatin("consonant");
}

// Search and Replace

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

while (false) {
  function myReplace(str, before, after) {
    let index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
}

// DNA Pairing

/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

while (false) {
  function pairElement(str) {
    let fixedDNA = [];

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === 'A') {
        fixedDNA.push(['A', 'T']);
      } else if (str[i] === 'T') {
        fixedDNA.push(['T', 'A']);
      } else if (str[i] === 'C') {
        fixedDNA.push(['C', 'G']);
      } else if (str[i] === 'G') {
        fixedDNA.push(['G', 'C']);
      }
    }
    
      return fixedDNA;
  }
  pairElement("GCG");
}

// Missing letters

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

while (false) {
  function fearNotLetter(str) {
    if (str.length <= 0) {
      return undefined;
    } else {
      for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) > str.charCodeAt(i - 1) + 1) {
          return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
      }
      return undefined;
    }
  }
  
  fearNotLetter("abce");
}

// Sorted Union

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

while (false) {
  function uniteUnique() {
    let auxArr = [];
    for(let i = 0; i < arguments.length; i++) {
      for(let j = 0; j < arguments[i].length; j++) {
        if(auxArr.indexOf(arguments[i][j]) === -1) {
          auxArr.push(arguments[i][j]);
        } 
      }
    }
    return auxArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
}

// Convert HTML Entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

while (false) {
  function convertHTML(str) {
    const mapHTML = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
    };
    return str.replace(/[&<>"']/g, match => mapHTML[match]);
  }
  
  convertHTML("Dolce & Gabbana");
}

// Sum All Odd Fibonacci Numbers

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.*/

while (false) {
  function sumFibs(num) {
    if(num <= 0) {
      return "Invalid";
    }
    let aux1 = 0;
    let aux2 = 1;
    let resultSum = 0;
    for(let i = 1; aux2 <= num; i++) {
      if(aux2 % 2 !== 0) {
        resultSum += aux2;
      }
      let auxVar = aux2;
      aux2 += aux1;
      aux1 = auxVar;

    }
    return resultSum;
  }
  
  sumFibs(4);
}

// Sum All Primes

/*A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is
only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/

while (false) {
  function sumPrimes(num) {
    if(num <= 1) {
      return "Invalid";
    }
    let resultSum = 0;
    let isPrime = false;
    for(let i = 2; i <= num; i++) {
      for(let j = 2; j <= i; j++) {
        if(i % j === 0) {
          if (i === j) {
            isPrime = true;
          } else {
            isPrime = false;
            break;
          }
        }
      }
      if(isPrime === true) {
        resultSum += i;
      }
    }
    return resultSum;
  }
  sumPrimes(10);
}

// Smallest Common Multiple

/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential
numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all
numbers between 1 and 3. The answer here would be 6.*/

while (false) {
  function smallestCommons(arr) {
    let [min, max] = arr
    .slice()
    .sort((a, b) => a - b);
    const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
    const upperBound = range.reduce((prod, curr) => prod * curr);
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      const divisible = range.every((value) => multiple % value === 0);
      if (divisible) {
        return multiple;
      }
    }
  }
    
  smallestCommons([1,5]);
}

// Drop it

/*Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func
returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.*/

while (false) {
  function dropElements(arr, func) {
    let range = arr.slice().length;
    for(let i = 0; i < range; i++) {
      if(func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }
}

// Steamroller

// Flatten a nested array. You must account for varying levels of nesting.

while (false) {
  function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };

  steamrollArray([1, [2], [3, [[4]]]]);
}

// Binary Agents

// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

while (false) {
  function binaryAgent(str) {
  let binaryArray = str.split(' ');
  let englishStr = '';

  for (let i = 0; i < binaryArray.length; i++) {
    englishStr += String.fromCharCode(parseInt(binaryArray[i], 2));
  }

  return englishStr;
  }

const englishSentence = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
}

// Everything Be True

/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return
true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

while (false) {
  function truthCheck(collection, pre) {
    let isTruthy = true;
    for(let i = 0; i < collection.length; i++) {            // I like this version much more: return collection.every(obj => obj[pre]); (just one line)
      if(!collection[i][pre]) {
      isTruthy = false;
      } 
    } 
  
    return isTruthy;
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
}

// Arguments Optional

/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.*/

while (false) {
  function addTogether() {
    for(let i = 0; i < arguments.length; i++) {
      if(typeof(arguments[i]) !== 'number') {
        return undefined;
      }
    }
    if(arguments.length === 2) {
        return arguments[0]+arguments[1];
    } else if(arguments.length === 1) {
      let arg1 = arguments[0];
      return function (arg2) {
        if (typeof arg2 === 'number') {
          return arg1 + arg2;
          }
        return undefined;
        }
      }
  }
  addTogether(2,3);
}

// Make a Person

/*Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object.
Each test will declare a new Person instance as new Person('Bob', 'Ross').*/

while (false) {
  const Person = function(first, last) {
    let firstName = first;
    let lastName = last;
    this.getFirstName = function() {
       return firstName };
    this.getLastName = function() {
       return lastName };
    this.getFullName = function() {
       return `${this.getFirstName()} ${this.getLastName()}` };
    this.setFirstName = function(first) {
      return firstName = first;
    };
    this.setLastName = function(last) {
      return lastName = last;
    };
    this.setFullName = function(first, last) {
      this.setFirstName(first);
      this.setLastName(last);
      return this.getFullName();
    };
  };
}

// Map the Debris

/*According to Kepler's Third Law, the orbital period  T
  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2π√(a^3/μ)
 
a => is the orbit's semi-major axis
μ=GM
  is the standard gravitational parameter

G => is the gravitational constant,

M => is the mass of the more massive body.

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.*/

while (false) {
  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({name, avgAlt}) => {
      const totalAlt = earthRadius + avgAlt;
      let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(totalAlt, 3)/GM));
      return {name, orbitalPeriod}
    });
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
}