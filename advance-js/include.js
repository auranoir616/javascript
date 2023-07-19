var kalimat = "ayam goreng dimakan kucing"
if (kalimat.includes("kucing"))
{console.log("ada")}
else
{console.log('tidak')}
//output : ada

var kalimat2 = 'nasi goreng dimakan budi'
console.log(kalimat2.includes("budi"))
// output : true

var array1 = [1,2,3,4,5,6];
console.log(array1.includes(7))
//output : false


var array2 = [5,6,7,1,5,7,9,5,2];
console.log(array2.includes(1,5))
//output : false

var kalimat3 = 'pisang apel anggur nanas'
console.log(kalimat3.includes("apel",10))
// output : false
