let harga = 500000;
let diskon = 0;

if(harga >= 1000000){
diskon = 0.5 * harga;
}else if (harga >= 500000 && harga < 1000000){
diskon = 0.3 * harga;
}else if(harga >= 100000 && harga < 500000){
diskon = 0.1 * harga;
}

let totalbayar = harga - diskon;

console.log('harga awal: ',harga)
console.log('diskon :', diskon)
console.log('total bayar: ', totalbayar)