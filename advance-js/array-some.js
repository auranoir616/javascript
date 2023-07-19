var data = [{nama:"pepaya",tipe:"buah"},
            {nama:"sawi",tipe:"sayur"},
            {nama:"apel",tipe:"buah"},
            {nama:"kucing",tipe:"hewan"}];
console.log(data.some(data => data.tipe === "buah"))
//output : true

const numbers = [1, 2, 3, 4, 5];

const evenExists = numbers.some(function(element) {
  return element % 2 === 0;
});

console.log(evenExists); // Output: true