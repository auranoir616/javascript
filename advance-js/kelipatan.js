function kelipatan5(){
    var kelipatan = [];
    for(var i=5;i<=500;i++){
        if(i%5 === 0){
            kelipatan.push(i)
        }
    }
    return kelipatan
}
console.log(kelipatan5())
