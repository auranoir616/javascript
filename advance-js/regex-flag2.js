//ambil data selain spasi
function panggilRegexp1(value) {
    var ambilData1 = value.match(/\w/g)
    console.log(ambilData1)
 }
 panggilRegexp1("Bulan ke 1 sd ke 4");
 //output: [ 'B', 'u', 'l', 'a', 'n', 'k', 'e', '1', 's', 'd', 'k', 'e', '4' ]
 

//mengambil hanya digit
function panggilRegexp2(value) {
    var ambilData2 = value.match(/\d/g)
    console.log(ambilData2)
 }
 
 panggilRegexp2("Bulan ke 1 sd ke 4");
//output : [ '1', '4' ]

//menghitung semua spasi
 function panggilRegexp3(value) {
    var ambilData3 = value.match(/\s/g)
    console.log(ambilData3)
    console.log("Banyaknya Spasi : ",ambilData3.length)
 }
 panggilRegexp3("Bulan ke 1 sd ke 4");
//output :
//[ ' ', ' ', ' ', ' ', ' ' ]
//Banyaknya Spasi :  5

//mengambil kecuali angka
function panggilRegexp4(value) {
    var ambilData4 = value.match(/\D/g)
    console.log(ambilData4)
 }
 
 panggilRegexp4("Bulan ke 1 sd ke 4");
 //output : [ 'B','u','l','a','n',' ','k','e',' ',' ','s','d',' ','k','e',' ' ]

 //ambil selain spasi
function panggilRegexp6(value) {
    var ambilData6 = value.match(/\S/g)
    console.log(ambilData6)
 }
 
 panggilRegexp6("Bulan ke 1 sd ke 4");
 //output:[ 'B', 'u', 'l', 'a', 'n', 'k', 'e', '1', 's', 'd', 'k', 'e', '4' ]