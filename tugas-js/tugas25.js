var angka = [ 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
console.log("sebelumnya :",angka.toString())
var angka2 = angka.sort();
console.log("ascending :",angka2.toString())
console.log("descending :",angka2.reverse().toString())
var angkafilter = angka.filter((angka) => angka > 10);
console.log("filter > 10 : ",angkafilter.toString())