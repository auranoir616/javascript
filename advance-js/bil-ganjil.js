function ganjil(){
    var bilganjil = []
    for ( var i=1;i<30;i++){
        if(i%2 !== 0){
            bilganjil.push(i) //menambahkan elemen dari nilai looping ke array bilganjil
        }
    }
return bilganjil
}
console.log(ganjil())