function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return 'bukan';
      }
    }
    return 'prima';
  }

  var nilai = isPrime(4);
  console.log(nilai)
  