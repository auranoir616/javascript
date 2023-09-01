// fungsi untuk menambah nilai
let nilai = 0
const nilaimax = 10

//fungsi jika jawaban salah
function salah(){
    const removequest = document.querySelector('.question')
    const removeansw = document.querySelectorAll(".buttonanswer")
    const containernilai = document.getElementById("score")
    const containeralert = document.getElementById('containeralert')

    removequest.parentElement.removeChild(removequest)
    removeansw.forEach(element => {
        element.parentElement.removeChild(element)
        containernilai.remove()
        })

    let kembali1 = document.createElement("button")
    kembali1.textContent = "mulai lagi."
    kembali1.id = "tombolmulailagi"
    kembali1.onclick= kembali
    containeralert.appendChild(kembali1)

    let pesangagal = document.createElement("h1")
    pesangagal.textContent = `Anda Gagal dengan score : ${nilai}` 
    containeralert.appendChild(pesangagal)
}

function menang(){
    const containeralert = document.getElementById('containeralert')
    const alert = document.querySelector("h1")
    const lanjutkan = document.getElementById("tombollanjut")
    const kembalilagi = document.getElementById("tombolkembali")
    const elemenskor = document.getElementById("score")


//jika elemen dalam kontainer alert > 0 maka akan di hapus
    if(containeralert.childElementCount > 0){
        alert.remove()
        lanjutkan.remove()
        kembalilagi.remove()
        elemenskor.remove()
    }

    let pesanmenang = document.createElement("h1")
    pesanmenang.textContent = `selesai!!! score anda ${nilai}`
    containeralert.appendChild(pesanmenang)

    let kembali1 = document.createElement("button")
    kembali1.textContent = "mulai lagi."
    kembali1.id = "tombolmulailagi"
    kembali1.onclick= kembali
    containeralert.appendChild(kembali1)

    
}
//fungsi untuk menambah score
function score(){
    const elemenskor = document.getElementById("score")
    elemenskor.textContent = `Score: ${nilai}`
    elemenskor.onchange = menang

}
//fungsi untuk menampilkan alert jika jawaban benar
function benar(){    
    const container2 = document.getElementById('containeralert')
    const removequest = document.querySelector('.question')
    const removeansw = document.querySelectorAll(".buttonanswer")


    let jawabbenar = document.createElement("h1")
    jawabbenar.textContent = "jawaban benar"
    container2.appendChild(jawabbenar)

    let lanjutbtn = document.createElement("button")
    lanjutbtn.textContent = "lanjut?"
    lanjutbtn.id = "tombollanjut"
    lanjutbtn.onclick = lanjut
    container2.appendChild(lanjutbtn)

    let kembaliawal = document.createElement("button")
    kembaliawal.textContent = "kembali"
    kembaliawal.id = "tombolkembali"
    kembaliawal.onclick = kembali
    container2.appendChild(kembaliawal)

    removequest.parentElement.removeChild(removequest)
    removeansw.forEach(element => {
        element.parentElement.removeChild(element)
    
    });
    //variabel nilai bertambah setiap function benar aktif
    nilai++
    score()
    if(nilai === nilaimax){
        menang()
    }

}
// fungsi untuk lanjut ke pertanyaan selanjutnya
function lanjut(){
    const containeralert = document.getElementById('containeralert')
    const alert = document.querySelector("h1")
    const lanjutkan = document.getElementById("tombollanjut")
    const kembali = document.getElementById("tombolkembali")
//jika elemen dalam kontainer alert > 0 maka akan di hapus
    if(containeralert.childElementCount > 0){
        alert.remove()
        lanjutkan.remove()
        kembali.remove()

        mulailagi()
    }

}
//kembali ke awal kuis dengan reload
function kembali(){
    const konfirmasi = window.confirm("Apa anda yakin?")
    if(konfirmasi){
        location.reload()
}
}
// fungsi untuk mulai dari awal
function mulai(){
    let distombolmulai = document.getElementById("tombolmulai")
    distombolmulai.parentElement.removeChild(distombolmulai)
    mulailagi()

}
//menampung nilai random yang masuk
//Setelah angka acak dihasilkan, loop akan terus diulang jika nilai res sudah ada dalam array nilaisebelumnya.
//jika nilai res belum ada dalam array nilaisebelumnya maka loop akan terus berjalan hingga menemukan nilai yang belum ada dalam array 
//max sebagai data.length
const nilaisebelumnya = []
function getrandomvalue(max){
 let res;
 do {
    res = Math.floor(Math.random()*max)
 }while(nilaisebelumnya.includes(res))
 nilaisebelumnya.push(res)
 return res
}

//fungsi untuk menampikan pertanyaan
function mulailagi(){
    fetch('http://localhost:3005/quiz')
.then(response => response.json())
.then(data =>{
    var res = getrandomvalue(data.length)
    const selectdata = data[res]

    const container = document.getElementById('containerquest')
    const container1 = document.getElementById('containeransw')
    
    let quest1 = document.createElement("h3")
    quest1.textContent = `${selectdata.question}`
    quest1.className = "question"
    container.appendChild(quest1)

    let answera = document.createElement('button')
    answera.className = "buttonanswer"
    answera.textContent =  `${selectdata.answers[0].text}`
    if(selectdata.answers[0].check){
        answera.onclick = benar
    }else{
        answera.onclick = salah
    }
    container1.appendChild(answera)

    let answerb = document.createElement('button')
    answerb.className = "buttonanswer"
    answerb.textContent =  `${selectdata.answers[1].text}`
    if(selectdata.answers[1].check){
        answerb.onclick = benar
    }else{
        answerb.onclick = salah
    }
    container1.appendChild(answerb)

    let answerc = document.createElement('button')
    answerc.className = "buttonanswer"
    answerc.textContent =  `${selectdata.answers[2].text}`
    if(selectdata.answers[2].check){
        answerc.onclick = benar
    }else{
        answerc.onclick = salah
    }
    container1.appendChild(answerc)

    let answerd = document.createElement('button')
    answerd.className = "buttonanswer"
    answerd.textContent =  `${selectdata.answers[3].text}`
    if(selectdata.answers[3].check){
        answerd.onclick = benar
    }else{
        answerd.onclick = salah
    }
    container1.appendChild(answerd)
})
}