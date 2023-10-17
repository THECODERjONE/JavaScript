 function ask(question, yes, no) {
    // if (confirm(question)) yes()  ----> I changed it to the terniary operator
    // else no();
    confirm(question) ? yes() : no();
  }

// function ask(question, yes, no) {      /
//   if (confirm(question)) {             |
//      return yes();                     |  AGR
//   }                                    |  Method
//   no();                                |
// }                                      \

 ask(
   "Do you agree?",
   function() { alert("You agreed."); },
   function() { alert("You canceled the execution."); }
 );