function calcFactorial(int) {
    let factInt = 1;
    for(let i = 1; i <= int; i++) {
        factInt *= i;
    }
    return factInt;
}