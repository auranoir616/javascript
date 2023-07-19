function buat_login(){
    var elem = document.getElementById("x");
    elem.parentElement.removeChild(elem)
    //menghapus elemenr dengan ID x
    var p = document.createElement("p");
    p.className= "tulisan_login";
    p.innerHTML= "silahkan login";
    //membuat element <P>

    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p)
    //menambahkan elemen <div> ke var element dan menambahkan var p didalamnya

    var form = document.createElement("FORM");
    element.appendChild(form)

    var label = document.createElement("label")
    label.innerHTML = "Username"
    form.appendChild(label)
    var input_username = document.createElement("input");
    input_username.type = "text"
    input_username.name = "Username"
    input_username.className = "form_login"
    form.appendChild(input_username)

    var label2 = document.createElement("label")
    label2.innerHTML = "password"
    form.appendChild(label2)
    var input_password = document.createElement("input");
    input_password.type = "password"
    input_password.name = "password"
    input_password.className = "form_login"
    form.appendChild(input_password)

    var tombol = document.createElement("input");
    tombol.type = "submit"
    tombol.className = "tombol_login"
    form.appendChild(tombol)




}