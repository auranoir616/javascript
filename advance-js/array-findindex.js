var angka =[10,15,2,120,36];

var findindex = angka.findIndex(angka=>
    angka > 11
)

console.log(findindex)
//output : 1

var hewan = ['sapi','kerbau','kucing','ikan','burung'];

var hewanindex = hewan.findIndex(function(hewan){
    return hewan === 'kucing'
})
console.log(hewanindex)
