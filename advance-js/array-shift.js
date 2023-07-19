function shift(){
    var kota =['jakarta','surabaya','bandung','malang','medan']
    console.log(kota) // menampilkan isi dari var kota

    kota2 = kota.shift(); // kota.shift() memiliki nilai jakarta 
    console.log(kota2)     // yang merupakan hasil shift dari var kota
                            //dan ditampilkan 

    return kota 

}

console.log(shift()) // menampilkan nilai return yang berupa array 
                     //   yang sudah di shift