// function splice(){
//     var buah = ['apel','anggur','pisang','mangga','melon'];
//     console.log(buah)

//     buah.splice(2,0,'semangka','duku')

//     return buah
// }

// console.log(splice())

var buah = ['apel','anggur','pisang','mangga','melon'];
console.log(buah) //menampilkan array sebelum perubahan

var hapusbuah = buah.splice(2,1)
console.log(hapusbuah) //menampilkan 'pisang' yg sudah dihapus
console.log(buah)      // menampilkan array tanpa 'pisang'

buah.splice(2,1,'duku')
console.log(buah)       //mengganti index 2 yaitu 'mangga' dengan 'duku'

buah.splice(2,0,'semangka')
console.log(buah)       //menambahkan 'semangka' ke indeks 2
