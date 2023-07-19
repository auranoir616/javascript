function buah(){
    var namabuah= ['pisang','jeruk','apel','mangga'];
    console.log(namabuah)

    namabuah.pop();
    console.log(namabuah)
    
    namabuah.shift();

    return namabuah
}

console.log(buah())