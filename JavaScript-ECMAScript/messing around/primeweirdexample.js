function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

showPrimes(10);
  // let n = 10;
  // let testPrime = 2;
  
  // findPrimes:
  // for (;testPrime <= n; testPrime++) {
  //     for (let testDivisor = 2; testDivisor < testPrime; testDivisor++) {
  //         if (testPrime%testDivisor === 0) continue findPrimes;
  //     }
  //     alert(testPrime);
  // }