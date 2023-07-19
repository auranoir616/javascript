var x = 2;
var y = 3;
var z = 1;

if(x>y){
    if(x>z){
        console.log('nilai x terbesar')
    }
    else{
        console.log('nilai x terbesar kedua')
    }
}
else{
    if(x<z){
        console.log('nilai x terkecil')
    }
    else{
        console.log('nilai x terkecil kedua')
    }
}

//////////////////////////////////////////
var nilai = 75;
var kelas = "A";

if (nilai >= 80) {
    if (kelas === "A") {
        console.log("Nilai kamu sangat baik dalam kelas A!");
    } else {
        console.log("Nilai kamu sangat baik, tetapi bukan dalam kelas A.");
    }
} else {
    console.log("Nilai kamu perlu ditingkatkan.");
}