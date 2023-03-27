function isCullenPrime(n) {
    const num = n * Math.pow(2, n) + 1;
    return isPrime(num);
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
  