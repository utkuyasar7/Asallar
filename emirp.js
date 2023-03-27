function isEmirp(num) {
    if(!isPrime(num)) {
      return false;
    }
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    if(num === reversed) {
      return false;
    }
    return isPrime(reversed);
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
  