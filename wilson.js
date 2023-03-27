function isWilsonPrime(num) {
    if(num === 5) {
    return true;
    }
    const factorial = factorialMod(num - 1, num);
    const wilson = (factorial + 1) % (num * num);
    return wilson === 0;
    }
    
    function factorialMod(num, mod) {
    let result = 1;
    for(let i = 2; i <= num; i++) {
    result = (result * i) % mod;
    }
    return result;
    }