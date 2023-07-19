var data = [{nama:"pepaya",tipe:"buah"},
            {nama:"sawi",tipe:"sayur"},
            {nama:"apel",tipe:"buah"},
            {nama:"kucing",tipe:"hewan"}];

console.log(data.every(data=>data.nama === "sawi"))
//output : false

const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(function (number) {
  return number % 2 === 0;
});

console.log(allEven); // Output: true
