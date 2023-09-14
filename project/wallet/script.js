const formpopup = document.getElementById('form-popup')
const inputformbutton = document.getElementById('inputformbutton')
const table =document.getElementById('table')
const tbody = document.getElementById('tbody')


inputformbutton.addEventListener('click',function(){
    formpopup.style.display="flex"
})

//membuat fungsi cancel dengan mengosongkan value dari input dan mengubah display form jadi none
function cancel(){
    document.getElementById('inputdate').value = ''
    document.getElementById('inputtransaksi').value = ''
    document.getElementById('inputpengeluaran').value = ''
    document.getElementById('inputpemasukan').value = ''
    document.getElementById('inputketerangan').value = ''

    formpopup.style.display="none"
}

//metode post data dengan parameter datatransaksi
function submitdata(datatransaksi){

    fetch('http://localhost:3001/transaksi', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(datatransaksi)
    })
    .then(response => response.json())
    .then(result => {
        console.log("POST data berhasil!", result)
    })
    .catch(error=>{
        console.log(error)
    })

}
//menentukan data yang akan di post ke database
function transaksi(){
    let inputtanggal = document.getElementById('inputdate').value
    let inputtransaksi = document.getElementById('inputtransaksi').value
    let inputout = document.getElementById('inputpengeluaran').value
    let inputin = document.getElementById('inputpemasukan').value
    let inputket = document.getElementById('inputketerangan').value

    const datatransaksi ={
        id:new Date().getTime(),
        date: inputtanggal,
        transaksi: inputtransaksi,
        pengeluaran: inputout,
        pemasukan: inputin,
        keterangan: inputket
        };
        submitdata(datatransaksi)
        console.log(datatransaksi)
    }

    //metode menampilkan data dalam tabel
    fetch('http://localhost:3001/transaksi')
    .then(response => response.json())
    .then(data =>{

        data.forEach(datatable => {
            
        const addrow = document.createElement('tr')
        // Menambahkan atribut data dengan ID untuk identifikasi row
        addrow.setAttribute('dataidrow', datatable.id);

        const tdid = document.createElement('td')
        tdid.textContent = datatable.id
        addrow.appendChild(tdid)

        const tdtanggal = document.createElement('td')
        tdtanggal.textContent = datatable.date
        addrow.appendChild(tdtanggal)

        const tdtransaksi = document.createElement('td')
        tdtransaksi.textContent =datatable.transaksi
        addrow.appendChild(tdtransaksi)

        const tdout = document.createElement('td')
        tdout.textContent =datatable.pengeluaran
        addrow.appendChild(tdout)

        const tdin = document.createElement('td')
        tdin.textContent = datatable.pemasukan
        addrow.appendChild(tdin)

        const tdket = document.createElement('td')
        tdket.textContent = datatable.keterangan
        addrow.appendChild(tdket)

        const tdedit = document.createElement('td')
        // Menambahkan atribut data dengan ID untuk identifikasi cell
        tdedit.setAttribute('dataidtd', datatable.id); 
        const divbtn = document.createElement('div')

        const editbtn = document.createElement('button')
        const div1 = document.createElement('div')
        const deletebtn = document.createElement('button')
        const savebtn = document.createElement('button')
        const cancelbtn = document.createElement('button')


        divbtn.appendChild(savebtn)
        divbtn.appendChild(editbtn)
        divbtn.appendChild(div1)
        divbtn.appendChild(deletebtn)
        divbtn.appendChild(cancelbtn)

        divbtn.className = 'ui buttons'
        div1.className ='or'
        editbtn.className='ui blue button'
        deletebtn.className='ui red button' 
        savebtn.className='ui green button'
        cancelbtn.className='ui red button'

        cancelbtn.id = "cancel"
        deletebtn.id= "delete"
        editbtn.id = "edit"
        savebtn.id = "save"

        cancelbtn.textContent = "cancel"
        deletebtn.textContent = "delete"
        editbtn.textContent = "edit"
        savebtn.textContent = "save"
        
        // Menambahkan atribut data dengan ID untuk identifikasi tombol
        savebtn.setAttribute('dataid', datatable.id); 
        savebtn.onclick = function() {
            savedataedit(this.getAttribute('dataid'));
          };
          // Menambahkan atribut data dengan ID untuk identifikasi tombol
        editbtn.setAttribute('dataid', datatable.id); 
        editbtn.onclick = editdata
        // Menambahkan atribut data dengan ID untuk identifikasi tombol
        deletebtn.setAttribute('dataid', datatable.id); 
        deletebtn.onclick = function(){
            deletedata(this.getAttribute('dataid'))
        }
        // Menambahkan atribut data dengan ID untuk identifikasi tombol
        cancelbtn.setAttribute('dataid', datatable.id); 
        cancelbtn.onclick = function(){
            canceledit(this.getAttribute('dataid'))
        }
        tdedit.appendChild(divbtn)
        addrow.appendChild(tdedit)
        tbody.appendChild(addrow)


        })
    })
.catch(error=>{
    console.log(error)
})

//metode untuk menampilkan tombol editing dengan mengidentifikasi cell tempat tombol dibuat dengan id transaksi
function displaysavecancel(id){
    const cell = document.querySelector(`[dataidtd="${id}"]`)
    const displaysave = cell.querySelector('#save')
    const displaydelete = cell.querySelector('#delete')
    const displayedit = cell.querySelector('#edit')
    const displaycancel = cell.querySelector('#cancel')

    displaycancel.style.display = 'inline'
    displaysave.style.display = 'inline'
    displaydelete.style.display = 'none'
    displayedit.style.display = 'none'
}

function displayeditdelete(id){
    const cell = document.querySelector(`[dataidtd="${id}"]`)
    const displaysave = cell.querySelector('#save')
    const displaydelete = cell.querySelector('#delete')
    const displayedit = cell.querySelector('#edit')
    const displaycancel = cell.querySelector('#cancel')

    displaycancel.style.display = 'none'
    displaysave.style.display = 'none'
    displaydelete.style.display = 'inline'
    displayedit.style.display = 'inline'
}

//pembuatan fungi cancel edit dengan menambahkan textcontent ke dalam cell dengan value elemen input sebelumnya
function canceledit(id){
    //identifikasi value textcontent menggunakan selector id elemen input didalam baris yang sudah di identifikasi menggunakan id transaksi
    const baris = document.querySelector(`[dataidrow="${id}"]`)
    const tdtanggal = baris.querySelector('#inputtanggaltbl').value
    const tdtransaksi = baris.querySelector('#inputtransaksitbl').value
    const tdpengeluaran = baris.querySelector('#inputpengeluarantbl').value
    const tdpemasukan = baris.querySelector('#inputpemasukantbl').value
    const tdketerangan = baris.querySelector('#inputketerangantbl').value
    //identifikasi cell dengan anak elemen ke n untuk pengisian textcontent
    baris.querySelector('td:nth-child(2)').textContent = tdtanggal
    baris.querySelector('td:nth-child(3)').textContent = tdtransaksi   
    baris.querySelector('td:nth-child(4)').textContent = tdpengeluaran   
    baris.querySelector('td:nth-child(5)').textContent = tdpemasukan   
    baris.querySelector('td:nth-child(6)').textContent = tdketerangan   
   
   displayeditdelete(id)
// window.location.reload()
}

//metode edit data 
function editdata(){
    //identifikasi baris dengan id transaksi 
const id = this.getAttribute('dataid')
const row = document.querySelector(`[dataidrow="${id}"]`)

console.log(id)
//pembuatan elemen input kedalam cell yang sudah diidentifikasi menggunakan anak elemen 
//serta menentukan value nya dengan textContent
const tdtanggal = row.querySelector('td:nth-child(2)')
let divtanggal = document.createElement('div')
divtanggal.className = "ui mini input focus"
let inputtanggal = document.createElement('input')
inputtanggal.type = 'date'
inputtanggal.id = "inputtanggaltbl"
inputtanggal.value =`${tdtanggal.textContent}`
tdtanggal.textContent = ''
tdtanggal.appendChild(divtanggal)
divtanggal.appendChild(inputtanggal)

const tdtransaksi = row.querySelector('td:nth-child(3)')
let divtransaksi = document.createElement('div')
divtransaksi.className = "ui mini input focus"
let inputtransaksi = document.createElement('input')
inputtransaksi.type = 'text'
inputtransaksi.id = "inputtransaksitbl"
inputtransaksi.value =`${tdtransaksi.textContent}`
tdtransaksi.textContent = ''
tdtransaksi.appendChild(divtransaksi)
divtransaksi.appendChild(inputtransaksi)

const tdpengeluaran = row.querySelector('td:nth-child(4)')
let divpengeluaran = document.createElement('div')
divpengeluaran.className = "ui mini input focus"
let inputpengeluaran = document.createElement('input')
inputpengeluaran.type = 'number'
inputpengeluaran.id = "inputpengeluarantbl"
inputpengeluaran.value =`${tdpengeluaran.textContent}`
tdpengeluaran.textContent = ''
tdpengeluaran.appendChild(divpengeluaran)
divpengeluaran.appendChild(inputpengeluaran)

const tdpemasukan = row.querySelector('td:nth-child(5)')
let divpemasukan = document.createElement('div')
divpemasukan.className = "ui mini input focus"
let inputpemasukan = document.createElement('input')
inputpemasukan.type = 'number'
inputpemasukan.id = "inputpemasukantbl"
inputpemasukan.value =`${tdpemasukan.textContent}`
tdpemasukan.textContent = ''
tdpemasukan.appendChild(divpemasukan)
divpemasukan.appendChild(inputpemasukan)

const tdketerangan = row.querySelector('td:nth-child(6)')
let divketerangan = document.createElement('div')
divketerangan.className = "ui mini input focus"
let inputketerangan = document.createElement('input')
inputketerangan.type = 'text'
inputketerangan.id = "inputketerangantbl"
inputketerangan.value =`${tdketerangan.textContent}`
tdketerangan.textContent = ''
tdketerangan.appendChild(divketerangan)
divketerangan.appendChild(inputketerangan)

displaysavecancel(id)

}

//metode put data dengan data baru yang didapat dari elemen input dalam tabel
function savedataedit(id){
const row = document.querySelector(`[dataid="${id}"]`)  
console.log(row)
const editeddata = {
      date: document.getElementById('inputtanggaltbl').value,
      transaksi: document.getElementById('inputtransaksitbl').value,
      pengeluaran:document.getElementById('inputpengeluarantbl').value,
      pemasukan: document.getElementById('inputpemasukantbl').value,
      keterangan: document.getElementById('inputketerangantbl').value,
}

console.log(editeddata)
fetch(`http://localhost:3001/transaksi/${id}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(editeddata)
})
.then(response => response.json())
.then(data => {
console.log(data)
})
.catch(error=>{
    console.log('eror',error)
})
}
  

function closeform(){
    formpopup.style.display = 'none'
}

//metode hapus baris saat proses delete data
function removerow(){
    const baris = document.querySelector(`[dataid='${id}]`)
    if(baris){
        baris.remove()
    }
}

//metode delete
function deletedata(id){
    fetch(`http://localhost:3001/transaksi/${id}`,
    {method: "DELETE"})
    .then(response => response.json())
    .then(data =>{
      if(data.ok){
        removerow(id)
      }else{
        console.log("gagal menghapus data")
      }
    })
    .catch(error=>{
        console.log(error)
    })
}

// metode untuk menentukan saldo
fetch('http://localhost:3001/transaksi')
.then(response => response.json())
.then(data =>{
//menyimpan data pemsukan dan pengeluaran kedalam array
let income = [] 
let expense = []
    data.forEach(datatable => {
var datain =parseFloat(datatable.pemasukan) || 0
var dataout = parseFloat(datatable.pengeluaran) || 0

expense.push(dataout)
income.push(datain)
console.log(expense)
console.log(income)


    })
    //menjumlahkan semua data dalam array menggunakan reducer
const reducein = (accumulatror,currentvalue) => accumulatror + currentvalue
const hasilreducein = income.reduce(reducein)
console.log(hasilreducein)

const reduceout = (accumulatror,currentvalue) => accumulatror + currentvalue
const hasilreduceout = expense.reduce(reduceout)
console.log(hasilreduceout)

//menentukan nilai saldo dengan mengurangi pemasukan dan pengeluaran
const saldoakhir = hasilreducein -hasilreduceout
console.log(saldoakhir)
    const displaysaldo = document.getElementById("saldo")
    displaysaldo.textContent = `saldo : ${saldoakhir}`
        
    })
    .catch(error=>{
        console.log(error)
    })

