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

// Match Single Characters Not Specified

// Create a single regex that matches all characters that are not a number or a vowel.
// Remember to include the appropriate flags in the regex.

while (false) {
    let quoteSample = "3 blind mice.";
    let myRegex = /[^0-9aeiou]/gi; // Change this line
    let result = quoteSample.match(myRegex); // Change this line
}

// Match Characters that Occur One or More Times

// You want to find matches when the letter s occurs one or more times in Mississippi.
// Write a regex that uses the + sign.

while (false) {
    let difficultSpelling = "Mississippi";
    let myRegex = /s+/gi; // Change this line
    let result = difficultSpelling.match(myRegex);
}

// Match Characters that Occur Zero or More Times

/*
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes.
Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero
or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes,
and it should not match any of the other quotes.
*/

while (false) {
    // Only change code below this line
    let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

    let result = chewieQuote.match(chewieRegex);
}

// Find Characters with Lazy Matching

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
// Remember the wildcard . in a regular expression matches any character.

while (false) {
    let text = "<h1>Winter is coming</h1>";
    let myRegex = /<.1*?>/gi; // Change this line
    let result = text.match(myRegex);
}

// Find One or More Criminals in a Hunt

// Write a greedy regex that finds one or more criminals within a group of other people.
// A criminal is represented by the capital letter C.

while (false) {
    let reCriminals = /C+/g; // Change this line
}

// Match Beginning String Patterns

// Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

while (false) {
    let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
}

// Match Ending String Patterns

// Use the anchor character ($) to match the string caboose at the end of the string caboose.

while (false) {
    let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
}

// Match All Letters and Numbers

// Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

while (false) {
    let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
}

// Match Everything But Letters and Numbers

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

while (false) {
    let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
}

// Match All Numbers

// Use the shorthand character class \d to count how many digits are in movie titles.
// Written out numbers ("six" instead of 6) do not count.

while (false) {
    let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
}

// Match All Non-Numbers

// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

while (false) {
    let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
}

// Restrict Possible Usernames

// Change the regex userCheck to fit the constraints listed above.

//I had to look at this one ut got it. Didn't think the logic properly.
while (false) {
    let username = "JackOfAllTrades";
    let userCheck = /^[a-zA-Z][a-zA-Z]+\d*$|^[a-zA-Z]\d\d+$/g; // Change this line
    let result = userCheck.test(username);
}

// Match Whitespace

// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

while (false) {
    let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
}

// Match Non-Whitespace Characters

// Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

while (false) {
    let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
}

// Specify Upper and Lower Number of Matches

// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

while (false) {
    let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; // Change this line                    I failed first cause i incased the whole thing like /[Oh{3,6}\sno]/g
let result = ohRegex.test(ohStr);
}

// Specify Only the Lower Number of Matches

// Change the regex haRegex to match the word Hazzah only when it has four or more letter z's

while (false) {
    let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/g; // Change this line
let result = haRegex.test(haStr);
}

// Specify Exact Number of Matches

// Change the regex timRegex to match the word Timber only when it has four letter m's.

while (false) {
    let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/g; // Change this line
let result = timRegex.test(timStr);
}

// Check for All or None

// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

while (false) {
    let favWord = "favorite";
let favRegex = /favou?rite/g; // Change this line
let result = favRegex.test(favWord);
}

// Positive and Negative Lookahead

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

while (false) {
    let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/gi; // Change this line
let result = pwRegex.test(sampleWord);
}

// Check For Mixed Grouping of Characters

// Fix the regex so that it checks for the names of Franklin Roosevelt or
// Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

// Then fix the code so that the regex that you have created is checked against myString and either
// true or false is returned depending on whether the regex matches.

while (false) {
    let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line          I had to look for this one too.
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
}

// Reuse Patterns Using Capture Groups

// Use capture groups in reRegex to match a string that consists of only the same number
// repeated exactly three times separated by single spaces.

while (false) {
    let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/g; // Change this line
let result = reRegex.test(repeatNum);
}

// Use Capture Groups to Search and Replace

// Write a regex fixRegex using three capture groups that will search for each word in the string one two three.
// Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable.
// Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

while (false) {
    let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
}

// Remove Whitespace from Start and End

// Write a regex and use the appropriate string methods to remove
// whitespace at the beginning and end of strings.

// Note: The String.prototype.trim() method would work here,
// but you'll need to complete this challenge using regular expressions.

while (false) {
    let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/gi; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
}