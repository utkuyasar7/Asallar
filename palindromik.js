function isPalindromicCarolPrime(num) {
    const carol = BigInt(2 ** BigInt(num)) - 1n;
    const carolDigits = String(carol).split('');
    return isPalindrome(carolDigits) && isPrime(carol);
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
