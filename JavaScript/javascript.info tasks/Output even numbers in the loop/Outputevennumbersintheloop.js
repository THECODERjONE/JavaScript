//Use the for loop to output even numbers from 2 to 10.

let loopedValue = 2;

for (; loopedValue <= 10; loopedValue++) {
    if (loopedValue % 2 === 0) {
        alert(loopedValue);
    }
}


//I failed to understand that, the moment the check is false, the loop breaks, so I was
//trying to force de "even" condition inside the loop check, which caused loop breaks.