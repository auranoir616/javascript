function isi(){
    var kalimat = "budi anduk, budi anto, dan budi man memakan pisang di kebun ";
    console.log(kalimat.replace("pisang","anggur"))
    //output : budi memakan anggur di kebun
    console.log(kalimat.replace(/budi/,"wahyu"))
    //output : wahyu anduk, budi anto, dan budi man memakan pisang di kebun
    console.log(kalimat.replace(/budi/g,"wahyu"))
    //output : wahyu anduk, wahyu anto, dan wahyu man memakan pisang di kebun
}

isi() 