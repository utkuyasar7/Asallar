function isLeylandPrime(p, q) {
    const num = Math.pow(p, q) + Math.pow(q, p);
    if(!isPrime(num)) {
      return false;
    }
    const leyland = Math.floor(Math.pow(num, 1/(p+q)));
    return num === Math.pow(leyland, p+q);
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