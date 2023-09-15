let variable1 = 0;
let originalvariable1 = variable1;

variable1 +=++variable1;
for (; variable1<8; ++variable1);

alert(originalvariable1);
alert(variable1);

//Works as intended