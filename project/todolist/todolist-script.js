function tambah_list(){

var input_list = document.getElementById("inputlist1").value
var date = document.getElementById("date1").value
var time = document.getElementById("time1").value
var submit = document.getElementById("submit1")
var table1 = document.getElementById("table_list")

var tambahlist = document.createElement("tr")
table1.appendChild(tambahlist)
 
var tambahceklist = document.createElement("td")
tambahlist.appendChild(tambahceklist)

var tambahlist1 = document.createElement("td")
tambahlist1.textContent=input_list
tambahlist.appendChild(tambahlist1)

var tambahdate = document.createElement("td")
tambahdate.textContent=date
tambahlist.appendChild(tambahdate)

var tambahtime = document.createElement("td")
tambahtime.textContent=time
tambahlist.appendChild(tambahtime)

var ceklist = document.createElement("input")
ceklist.type="checkbox"
tambahceklist.appendChild(ceklist)

ceklist.addEventListener("change", function(){
    if(ceklist.checked){
        tambahlist1.style.textDecoration = "line-through"
        tambahdate.style.textDecoration = "line-through"
        tambahtime.style.textDecoration = "line-through"

        tambahlist1.style.background = "red"
        tambahdate.style.background = "red"
        tambahtime.style.background = "red"

    }else{
        tambahlist1.style.textDecoration = "none"
        tambahdate.style.textDecoration = "none"
        tambahtime.style.textDecoration = "none"

        tambahlist1.style.background = "none"
        tambahdate.style.background = "none"
        tambahtime.style.background = "none"

    }
})


}

document.addEventListener("submit", function (event) {
    event.preventDefault();
});

function hapus(){
    var isitabel = document.getElementById("table_list")
    var jmlhbaris = isitabel.getElementsByTagName("tr")
    // mengambil elemen tr yang berada dalam tabel

    for (var i = 0; i<jmlhbaris.length; i++){ //looping untuk mencari jumlah tr
        var baris1 = jmlhbaris[i] //jumlah tr disimpan pada var baris1
        var barislist = baris1.getElementsByTagName("td") //mendapatkan td dari jumbah baris
        // mentukan jumlah elemen td dari elemen tr yang terbentuk

        var bariscoret = false;
        for (var j = 0; j<barislist.length; j++){
            if(barislist[j].style.textDecoration==="line-through"){
                bariscoret = true;
                break;
        //menentukan apakah barislist(td) punya coret apa tidak
            }
        }
        if (bariscoret){
            isitabel.removeChild(baris1)
            i--
            //menghapus baris
        }
    }
}
function hapussemua(){
    var isitabel = document.getElementById("table_list")
    var baris= isitabel.getElementsByTagName("tr")

    for( var i =0; i<baris.length;i++){
        var semuabaris= baris[i]
    }

    isitabel.removeChild(semuabaris)
}

var today = new date().toISOString().split("T")[0];
document.getElementById("date1").setAttribute("min",today)