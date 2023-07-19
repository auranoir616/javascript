function pitagoras(){
    var AB = 8;
    var BC = 6;

    console.log('nilai AB :',AB)
    console.log('nilai BC :',BC)

    return Math.pow(AB,2) + Math.pow(BC,2)
}

var AC = pitagoras()


console.log('Panjang sisi AC pada segitiga siku-siku tersebut adalah : ',Math.sqrt(AC),'cm')
