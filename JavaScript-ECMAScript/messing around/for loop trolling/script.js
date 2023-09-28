var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
    console.log(printNumTwo());
  }
}
console.log(printNumTwo());


//The idea here is that, if you place it inside the for loop, it will give your 2 instead of 3,
//because it didn't yet execute the exit "i++" function. The tutorial said there is no
//way around it other than changing "i" from "var" to "let". I proved it wrong.