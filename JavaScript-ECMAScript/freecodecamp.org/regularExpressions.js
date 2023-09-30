// Using the Test Method

//Apply the regex myRegex on the string myString using the .test() method.

while (false) {
    let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
}

// Match Literal Strings

/*
Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
*/

while (false) {
    let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
}

// Match a Literal String with Different Possibilities

/*
Complete the regex petRegex to match the pets dog, cat, bird, or fish.
*/

while (false) {
    let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
}

// Ignore Case While Matching


// Write a regex fccRegex to match freeCodeCamp, no matter its case.
// Your regex should not match any abbreviations or variations with spaces.

while (false) {
    let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
}

// Extract Matches

// Apply the .match() method to extract the string coding.

while (false) {
    let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
}

// Find More Than the First Match

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

while (false) {
    let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
}

// Match Anything with Wildcard Period

// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.
// Your regex should use the wildcard character.

while (false) {
    let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
}

// Match Single Character with Multiple Possibilities

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

// Note: Be sure to match both upper- and lowercase vowels.

while (false) {
    let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
}

// Match Letters of the Alphabet

// Match all the letters in the string quoteSample.

// Note: Be sure to match both uppercase and lowercase letters.

while (false) {
    let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
}

// Match Numbers and Letters of the Alphabet

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6.
// Remember to include the appropriate flags in the regex.

while (false) {
    let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
}