function isPalindrome(str) {
    // Menghapus spasi dan mengubah semua huruf menjadi lowercase
    const formattedStr = str.toLowerCase().replace(/ /g, '');
  
    // Membalikkan string
    const reversedStr = formattedStr.split('').reverse().join('');
  
    // Membandingkan string asli dengan string yang dibalik
    return formattedStr === reversedStr;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Masukkan kata atau frase: ", function(input) {
    if (isPalindrome(input)) {
      console.log(`${input} adalah palindrom.`);
    } else {
      console.log(`${input} bukan palindrom.`);
    }
  
    rl.close();
  });
  