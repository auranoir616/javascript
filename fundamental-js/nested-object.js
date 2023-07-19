function nestedobject(){
    var siswa ={
        nama: 'budi',
        kelas: '5',
        nilai:{
            kelas1: 78,
            kelas2: 80,
            kelas3: 95,
            kelas4: 60,
        }
        
    }
    console.log(siswa.nilai.kelas1)
}
nestedobject()