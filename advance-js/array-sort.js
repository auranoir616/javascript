function sorting(){
    var buah = ['pepaya','anggur','belimbing','salak','nanas','jeruk']
    console.log(buah)
    console.log('=======================================================')
    var buah2 = buah.sort()
    return buah2
}
// output:
//[ 'pepaya', 'anggur', 'belimbing', 'salak', 'nanas', 'jeruk' ]
//=======================================================
//[ 'anggur', 'belimbing', 'jeruk', 'nanas', 'pepaya', 'salak' ]

console.log(sorting())
var angka = [2158,125,1622,54,455,987,71,1,58]
console.log(angka.sort((a,b)=> a-b))
//output : [1,54,58,71,125,455,987,1622,2158]