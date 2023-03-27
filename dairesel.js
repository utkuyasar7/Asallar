function isCircularPrime(num) {
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
      if (!isPrime(parseInt(str))) {
        return false;
      }
      str = str.slice(1) + str[0];
    }
    return true;
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