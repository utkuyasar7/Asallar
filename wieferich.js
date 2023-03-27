function isWieferichPrime(p) {
    const num = Math.pow(2, p-1) % Math.pow(p, 2);
    const wieferich = Math.pow(2, Math.pow(p, 2)-3) % Math.pow(p, 2);
    return num === 1 && wieferich === 0;
  }