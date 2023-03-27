function isProthPrime(num) {
    const k = (num - 1) / 2;
    for(let i = 1; i <= k; i++) {
      const proth = (i * num) + 1;
      if(isPrime(proth)) {
        return true;
      }
    }
    return false;
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