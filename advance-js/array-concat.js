function arrayconcat(){
    var buah = ["semangka",'pisang','apel'];
    var buah2 = ['melon','rambutan'];
    var buah3 = ['duku']
    var buah4 = buah.concat(buah2,buah3);
    return buah4
}

console.log(arrayconcat())
// output: [ 'semangka', 'pisang', 'apel', 'melon', 'rambutan', 'duku' ]