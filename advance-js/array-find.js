var array = [15,10,110,5,50];

var arrayfind = array.find(function(element){
    return element > 100;
})

console.log(arrayfind)
//output : 110A

var object =[
{nama:"pepaya", jenis:"buah"},
{nama:"bayam", jenis:"sayur"},
{nama:"kucing", jenis:"hewan"},
{nama:"apel", jenis:"buah"},
{nama:"ikan", jenis:"hewan"}]

var object2 = object.find(function(object){
    return object.jenis === "hewan";
})

console.log(object2)
// output : { nama: 'kucing', jenis: 'hewan' }