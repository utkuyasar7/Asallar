function isSexyPrime(num) {
    const num1 = num + 6;
    const num2 = num - 6;
    return isPrime(num1) && isPrime(num2);
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