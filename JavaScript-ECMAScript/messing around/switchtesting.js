// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//   case 4:
//     alert( 'Exactly!' );
//   case 5:
//     alert( 'Too big' );
//   default:
//     alert( "I don't know such values" );
// }

// let a = 3;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }

// Ill test if I can swap 2 cases with a ||.

let a = 5;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3:
  case 5: 
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}