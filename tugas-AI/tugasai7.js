// function isPrime(number) {
//     if (number < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   const num = parseInt(prompt("Masukkan angka:")); 
//    if (isPrime(num)) {
//     console.log(`${num} adalah bilangan prima.`);
//   } else {
//     console.log(`${num} bukan bilangan prima.`);
//   }
  
const readline = require('readline');

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan angka: ", function(num) {
  if (isPrime(parseInt(num))) {
    console.log(`${num} adalah bilangan prima.`);
  } else {
    console.log(`${num} bukan bilangan prima.`);
  }

  rl.close();
});
