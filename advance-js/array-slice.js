function slicearray(){
    var buah = ['melon','apel','anggur','semangka','nanas','rambutan'];
    console.log(buah.slice(4))
    //output : [ 'nanas', 'rambutan' ]
    var buah2 = buah.slice(2,5)
    return buah2
}

console.log(slicearray())
//output : [ 'anggur', 'semangka', 'nanas' ]