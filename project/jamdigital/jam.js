
function jam(){
var date = new Date()
var tahun = date.getFullYear()
var jam =  date.getHours()
var menit = pad(date.getMinutes())
var tanggal = date.getDate()
var bulan = date.getMonth() + 1 
var detik = pad(date.getSeconds())

document.getElementsByClassName("Container-jam")[0].innerHTML = jam  +" :"
document.getElementsByClassName("Container-menit")[0].innerHTML = menit+":"
document.getElementsByClassName("Container-detik")[0].innerHTML = detik
document.getElementsByClassName("Container-tanggal")[0].innerHTML = tanggal+"-"
document.getElementsByClassName("Container-bulan")[0].innerHTML = bulan+"-"
document.getElementsByClassName("Container-tahun")[0].innerHTML = tahun
setTimeout(jam,1000)



}

function pad(value){
    return String(value).padStart(2, '0')
}

jam()