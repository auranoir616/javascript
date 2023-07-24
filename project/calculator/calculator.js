function calcul(event){
    document.getElementById("display1").style.color="black"
    // document.getElementById("displayhasil1").style.color="green"
    var currentdisplay = document.getElementById("display1").textContent

    if(event.innerText != "="){
        document.getElementById("display1").innerHTML = currentdisplay + event.innerText
        //jika yang dipencet != "=" maka akan ditampilkan
    }
    if(event.innerText =="C"){
        document.getElementById("display1").innerHTML=""
        // document.getElementById("displayhasil1").innerHTML=""
        // fungsi untuk tombol cancel
    }
    else if(event.innerText == "<<"){
        document.getElementById("display1").innerHTML = currentdisplay.slice(0, -1);
        document.getElementById("displayhasil1").innerHTML = "";
        //fungsi untuk tombol hapus
    }
     
    else if(event.innerText == "="){
        try{
        var hasil = eval(currentdisplay)
        document.getElementById("display1").innerHTML = hasil
        // document.getElementById("display1").innerHTML = ""
        hasil = currentdisplay.toString()
        } 
        catch(err){
            document.getElementById("display1").innerHTML = "ERROR"
            currentdisplay = ""
        }
    
   
    }
  
    }
    

