// Genel Form
// n doğal sayısı için
// (2 üzeri n)-1 = p 
// p asalı oluşuyorsa
// Mersenne Asalı'dır.


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


function merge(num){
    
    const val = Math.pow(2,num) -1
return val
}


