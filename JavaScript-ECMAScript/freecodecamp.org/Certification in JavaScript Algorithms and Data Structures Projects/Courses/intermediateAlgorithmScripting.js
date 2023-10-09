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

  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
}