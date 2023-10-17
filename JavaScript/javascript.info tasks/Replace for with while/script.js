//Rewrite the code changing the for loop to while without altering its behavior
//(the output should stay same).

let i = 0

//for (; i < 3; i++) {
//    alert( `number ${i}!` );
//}

//A:

while (i < 3) {
    alert( `number ${i}!` );
    i = i++
}