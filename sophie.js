function isSophieGermainPrime(num) {
    if(!isPrime(num)) {
      return false;
    }
    const sophie = 2*num + 1;
    return isPrime(sophie);
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