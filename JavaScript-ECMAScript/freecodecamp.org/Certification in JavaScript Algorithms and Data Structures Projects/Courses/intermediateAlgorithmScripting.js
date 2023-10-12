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
  
}