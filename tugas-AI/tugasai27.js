function fibonacci(n) {
    let fibSeries = [0, 1]; // Menginisialisasi deret Fibonacci dengan 0 dan 1 sebagai elemen awal
  
    for (let i = 2; i < n; i++) {
      // Menambahkan elemen baru ke deret Fibonacci sebagai jumlah dua elemen sebelumnya
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
  
    return fibSeries;
  }
  
  // Menampilkan deret Fibonacci dengan panjang 10
  const length = 10;
  const fibArray = fibonacci(length);
  console.log(fibArray);
  