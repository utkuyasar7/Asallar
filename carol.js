function isCarolPrime(num) {
    const carol = (2n ** BigInt(num)) - 1n;
    const carolPrime = (2n * carol) + 1n;
    return isPrime(carolPrime);
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