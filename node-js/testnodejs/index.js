// let angka = ''
// for(let p = 0; p<100; p++)
// {
//     angka = p
//     console.log(angka)
// }

// let p = 0
// while(p < 100)
// {p++ 
// console.log(p)
// }
// let n = ''
// let p = 0
// do {
//     p = p + 1;
//     n = n + p
// }while(p<100)
// console.log(n)

// function angka(a){
//     let angka;
//     if (a > 0){
//         angka = "positif"
//     }else{
//         angka = 'negatif'
//     }
//     return angka
// }
// console.log(angka(-5))
// const buah ="jeruk"
// switch(buah){
//     case"jeruk":
//     {console.log('jeruk harga 15rb ')
//     break
//     }
//     case"jambu":
//     {console.log('jambu harga 20rb ')
//     break
//     }
//     case"melon":
//     {console.log('melon harga 50rb ')
//     break
//     }
//     default:
//         console.log('buah habis')
// }

let buah = ['jambu','pisang','melon','apel']
// console.log(buah.length) 

buah.forEach(function(it,ind,ar){
console.log(it,ind,ar)
})