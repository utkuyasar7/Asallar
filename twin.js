function isTwinPrime(num) {
    if(!isPrime(num)) {
      return false;
    }
    return isPrime(num + 2) || isPrime(num - 2);
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
  