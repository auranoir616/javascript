var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

var hasil = angka.map((elemen) => "angka " + elemen + " " + (isFinite(elemen) ? "NOT Infinity" :"")).join("\n");
console.log(hasil.toString())


