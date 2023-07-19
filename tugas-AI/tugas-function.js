////////////tugas 1////////////////////

function addnumbers(a,b){

return a + b
}

var hasil1= addnumbers(2,4);
console.log(hasil1);

////////////////tugas 2//////////////////

function multiplynumbers(a,b,c){

return a * b * c
}
let hasil2= multiplynumbers(5,6,8)
console.log(hasil2);

//////////////////tugas 3////////////////

function greetvisitor(nama){
console.log("halo",nama,"! Selamat datang!")
return nama
}
greetvisitor("wahyu")

///////////tugas 4/////////////////

function converttemperature(hasil){
console.log(hasil,"celsius")

hasil = nilaiawal + 273.15;
console.log(hasil,"kelvin")

hasil = nilaiawal * 9/5 + 32;
console.log(hasil,"fahrenheit")
return hasil;
}
var nilaiawal = 6
converttemperature(nilaiawal)

//////////////tugas 5///////////////////

function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return "Angka " + number + " adalah genap";
    } else {
      return "Angka " + number + " adalah ganjil";
    }
  }
console.log(checkEvenOdd(5))  
 
///////////////tugas 6/////////////////////

function dividenumbers(a,b){

return a / b
}
var hasil6 = dividenumbers(10,5)
console.log(hasil6)

///////////////////////tugas 7/////////////////

function powerof(a){

return a*a
}
var hasil7 = powerof(5)
console.log(hasil7)

///////////////tugas 8///////////////////
function luassegitiga(a,t){

return 0.5*a*t;
}

var hasil8 = luassegitiga(50,100)
console.log(hasil8)

////////////tugas 9//////////////

function volumekubus(p,l,t){

return p*l*t
}

var hasil9 = volumekubus(6,5,4)
console.log(hasil9)