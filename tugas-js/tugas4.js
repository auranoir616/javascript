var rani = 170;
var budi = 160;
var wahyu = 150;

if(rani>budi && rani>wahyu){
    if(budi>wahyu){
        console.log('urutan tinggi badan siswa : rani,budi,wahyu')
    }else{
        console.log('urutan tinggi badan siswa : rani,wahyu,budi')
    }
}else if(budi>rani && budi>wahyu){
    if(rani>wahyu){
        console.log('urutan tinggi badan siswa : budi,rani,wahyu')
    }else{
        console.log('urutan tinggi badan siswa : budi,wahyu,rani')
    }
}else {
    if (rani>budi) {
      console.log("Urutan tinggi badan siswa: wahyu, rani, budi");
    } else {
      console.log("Urutan tinggi badan siswa: wahyu, budi, rani");
    }
  }
