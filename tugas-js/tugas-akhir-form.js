function buat_login(){
    var elem = document.getElementById('X')
    elem.parentElement.removeChild(elem)

    var p = document.createElement("p")
    p.className="tulisan_login"
    p.innerHTML="Silahkan Mendaftar"

    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p)

    var form = document.createElement("form")
    element.appendChild(form);

    var label1 = document.createElement("label");
    label1.innerHTML= "Nama User"
    label1.className= "label"
    form.appendChild(label1)

    var input1 = document.createElement("input");
    input1.className = "form_login"
    input1.type = "text"
    input1.name = "nama user"
    input1.placeholder = "Nama User."   
    form.appendChild(input1) 

    var label2 = document.createElement("label");
    label2.innerHTML= "No Handphone"
    label2.className= "label"
    form.appendChild(label2)

    var input2 = document.createElement("input");
    input2.className = "form_login"
    input2.type = "number"
    input2.name = "no handphone"
    input2.placeholder = "No Handphone."   
    form.appendChild(input2) 

    var label3 = document.createElement("label");
    label3.innerHTML= "Username"
    label3.className= "label"
    form.appendChild(label3)

    var input3 = document.createElement("input");
    input3.className = "form_login"
    input3.type = "text"
    input3.name = "username"
    input3.placeholder = "Username atau Email"   
    form.appendChild(input3)

    var label4 = document.createElement("label");
    label4.innerHTML= "Password"
    label4.className= "label"
    form.appendChild(label4)

    var input4 = document.createElement("input");
    input4.className = "form_login"
    input4.type = "password"
    input4.name = "password"
    input4.placeholder = "password"   
    form.appendChild(input4)

    var tombol = document.createElement("input");
    tombol.type = "submit"
    tombol.value = "MENDAFTAR SEKARANG"
    tombol.className = "tombol_login"
    form.appendChild(tombol)
}

