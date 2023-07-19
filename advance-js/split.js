function textsplit(){
    var text = "aku mau makan pisang"
    console.log(text.split(" ",2))// " " merupakan pemisah antar index, 
                                  // 2 merupakan jumlah yang akan ditampilkan 
}

textsplit()
// output [ 'aku', 'mau' ]

var text2 = "saya-hari-ini-makan-daging-sapi"
console.log(text2.split('-'))
//output
// [ 'saya', 'hari', 'ini', 'makan', 'daging', 'sapi' ]