function genap(){
    var bilgenap = []
    for(var i=1; i<30; i++){
        if(i%2 === 0){
        bilgenap.push(i)  //menambahkan elemen dari nilai looping ke array bilgenap
    }
    }
    return bilgenap
}
console.log(genap())



