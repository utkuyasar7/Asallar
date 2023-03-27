function isWoodallPrime(num) {
    const woodall = num * Math.pow(2, num) - 1;
    return isPrime(woodall);
  }
  function isPrime(num) {
    if(num <= 1) {
      return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }