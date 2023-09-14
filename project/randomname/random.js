let nama_depan = ["Arya", "Budi", "Citra", "Dewi", "Eko", "Firman", "Gita", "Hani", "Ira", "Joko", "Kartika", "Lia", "Mega", "Nina", "Oscar", "Putri", "Rudi", "Sari", "Tono", "Vina", "Wulan", "Yudi", "Zara"]
let nama_tengah = ["Rahmat", "Siti", "Wijaya", "Surya", "Purnama", "Tri", "Ananda", "Cahya", "Sari", "Permana", "Adi", "Prabowo", "Agus", "Mega", "Dewa", "Budi", "Indra", "Agung", "Jaya", "Nur", "Suharto", "Juni", "Astuti", "Wahyu"]
let nama_belakang = ["Saputra", "Wati", "Susilo", "Kurniawan", "Kusuma", "Wibowo", "Pratama", "Sari", "Hadi", "Purnomo", "Santoso", "Nugroho", "Yulianto", "Hartono", "Putra", "Saputri", "Mahmud", "Pangestu", "Pratiwi", "Siregar", "Supriyanto", "Wijaya", "Nurhayati", "Hermawan"]


const getindexnamadepan = Math.floor(Math.random()*nama_depan.length)
const getindexnamatengah = Math.floor(Math.random()*nama_tengah.length)
const getindexnamabelakang = Math.floor(Math.random()*nama_belakang.length)

const getnamadepan = nama_depan[getindexnamadepan]
const getnamatengah = nama_tengah[getindexnamatengah]
const getnamabelakang = nama_belakang[getindexnamabelakang]

const namalengkap = getnamadepan +" " +getnamatengah +" " +getnamabelakang
console.log(namalengkap)