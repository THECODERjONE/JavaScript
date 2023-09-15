//What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}

// It'd be 1. The "--" affects after the last alert is printed.