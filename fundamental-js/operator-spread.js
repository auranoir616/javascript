// var a = [1,2,3];
// var b = [4,5,6];

// var c = [...a,...b,7,8];
// console.log(c)

////////salin array dan object////

// var array =[11,12,13];
// var copyaarray=[...array];
// console.log(copyaarray)

// var object = {nama:'budi',umur:16,hobi:'mancing'};
// var copyobject = {...object}
// console.log(copyobject)

/////////Mengirimkan Argumen ke Fungsi:

function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  const result = sum(...numbers);
  
  console.log(result); 