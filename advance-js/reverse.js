function arrayreverse(){
    var kota = ["malang","jakarta","surabaya","bandung"];
    console.log(kota)

    var kotareverse = kota.reverse();
    return kotareverse
}

console.log(arrayreverse())

//output:
// [ 'malang', 'jakarta', 'surabaya', 'bandung' ]
// [ 'bandung', 'surabaya', 'jakarta', 'malang' ]


var p = "budi makan pisang"
console.log(p.split('').reverse().join(''))
//output: gnasip nakam idub