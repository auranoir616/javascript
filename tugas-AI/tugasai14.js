function hitungRataRata(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    var rataRata = total / arr.length;
    return rataRata;
  }
  
  var nilai = [80, 75, 90, 95, 85];
  var rataRataNilai = hitungRataRata(nilai);
  console.log("Rata-rata nilai adalah: " + rataRataNilai);
    