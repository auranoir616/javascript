let data =[ {buah: "pepaya",warna: "hijau"},
            {buah: "jeruk",warna:"kuning"},
            {buah:"melon",warna:"kuning"},
            {buah:"apel",warna:"hijau"}
        ];

var datafilter = data.filter(data => { // function (data)
  data.warna === "hijau";
})

console.log(datafilter)
// output :  { buah: 'pepaya', warna: 'hijau' },
//           { buah: 'apel', warna: 'hijau' }


var angka = [1,2,3,4,5,6,7,8,9,10];
var angka2 = angka.filter(angka =>{
    return angka %2 === 0 
} )
console.log(angka2)
//output : [ 2, 4, 6, 8, 10 ]