function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }

randomRange(2, 10);

console.log(randomRange(2, 10));