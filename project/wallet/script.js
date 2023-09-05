const formpopup = document.getElementById('form-popup')
const inputformbutton = document.getElementById('inputformbutton')
const table =document.getElementById('table')
const tbody = document.getElementById('tbody')


inputformbutton.addEventListener('click',function(){
    formpopup.style.display="block"
})

function cancel(){
    formpopup.style.display="none"
}


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
function transaksi(){
    let inputtanggal = document.getElementById('inputdate').value
    let inputtransaksi = document.getElementById('inputtransaksi').value
    let inputout = document.getElementById('inputpengeluaran').value
    let inputin = document.getElementById('inputpemasukan').value
    let inputket = document.getElementById('inputketerangan').value
    let inputaksi = document.getElementById('inputaksi').value

    const datatransaksi ={
        id:new Date().getTime(),
        date: inputtanggal,
        transaksi: inputtransaksi,
        pengeluaran: inputout,
        pemasukan: inputin,
        keterangan: inputket,
        aksi: inputaksi
        };
        submitdata(datatransaksi)

        console.log(datatransaksi)
    }

    fetch('http://localhost:3001/transaksi')
    .then(response => response.json())
    .then(data =>{

        data.forEach(datatable => {
            
        const addrow = document.createElement('tr')
        
        const tdid = document.createElement('td')
        tdid.textContent =datatable.id
        addrow.appendChild(tdid)

        const tdtanggal = document.createElement('td')
        tdtanggal.textContent =datatable.date
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

        const tdaksi = document.createElement('td')
        tdaksi.textContent = datatable.aksi
        addrow.appendChild(tdaksi)

        tbody.appendChild(addrow)
        })
    })
.catch(error=>{
    console.log(error)
})

function hitungsaldoakhir(){
    // let saldoawal = parseFloat(document.getElementById('tbody').getElementsByTagName('tr')[0].getElementsByTagName('td')[4].textContent) || 0;
    let saldoawal = 0; // Nilai awal jika elemen tidak ditemukan

    const tdElement = document.querySelector('#tbody tr:first-child td:nth-child(5)'); // Mengambil elemen td index ke-4 (indeks dimulai dari 1)
    if (tdElement) {
      saldoawal = parseFloat(tdElement.textContent) || 0;
        console.log(saldoawal)
    }
    let saldoakhir = saldoawal
    const tabel = document.getElementById("table")
    const row = tabel.getElementsByTagName('tbody')[0].getElementsByTagName('tr')

    for (let i = 0; i< row.length; i++){
        const pemasukan = parseFloat(row[i].getElementsByTagName('td')[4].textContent) || 0
        const pengeluaran = parseFloat(row[i].getElementsByTagName('td')[3].textContent) || 0
        saldoakhir += pemasukan - pengeluaran

    }
    const displaysaldo = document.getElementById('saldo')
    displaysaldo.textContent = `saldo akhir : ${saldoakhir}`

}
window.onload = function(){
    hitungsaldoakhir()
}

