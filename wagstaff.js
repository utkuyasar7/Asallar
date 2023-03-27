function isWagstaffPrime(num) {
    for(let n = 1; n <= Math.sqrt(num); n++) {
      const wagstaff = Math.floor((Math.pow(2, n) + 1) / 3);
      if(wagstaff === num) {
        return true;
      }
    }
    return false;
  }
  