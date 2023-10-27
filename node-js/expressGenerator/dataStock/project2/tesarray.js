// const a = [
// {nama:"apel", jumlah: 5},
// {nama:"jeruk", jumlah: 10},
// {nama:"anggur", jumlah: 7},
// {nama:"melon", jumlah: 6},
// ]
// const b = [
//     {nama:"apel", jumlah: 5},
//     {nama:"semangka", jumlah: 4},
//     {nama:"duku", jumlah: 2},
//     {nama:"apel", jumlah: 6},
// ]
// const c = [
//     {nama:"apel", jumlah: 4},
//     {nama:"pepaya", jumlah: 4},
// ]

// function filterArray(combined){
// const arraycombined = [].concat(...combined).filter(data =>{
//     return data.nama === "apel"
//  })
// console.log(arraycombined)
// }

// filterArray([a,b,c])
const data = [
    { nama: 'Laptop', jumlah_out: 2 },
    { nama: 'Monitor', jumlah_out: 1 },
    { nama: 'Router', jumlah_out: 1 },
    { nama: 'Laptop', jumlah_out: 2 },
    { nama: 'Projector', jumlah_out: 4 },
    { nama: 'Hard Disk Drive', jumlah_out: 2 },
    { nama: 'Laptop', jumlah_out: 2 },
    { nama: 'Speakers', jumlah_out: 2 },
    { nama: 'Graphics Card', jumlah_out: 1 },
    { nama: 'Speakers', jumlah_out: 4 },
    { nama: 'Camera', jumlah_out: 1 },
    { nama: 'External Hard Drive', jumlah_out: 3 },
    { nama: 'Laptop', jumlah_out: 1 },
    { nama: 'Scanner', jumlah_out: 2 },
    { nama: 'Laptop', jumlah_out: 2 },
    { nama: 'Printer', jumlah_out: 1 },
    { nama: 'Smartphone', jumlah_out: 2 },
    { nama: 'Headphones', jumlah_out: 2 },
    { nama: 'Scanner', jumlah_out: 6 },
    { nama: 'Hard Disk Drive', jumlah_out: 2 },
    { nama: 'Laptop', jumlah_out: 1 }
  ]

const result = {};

data.forEach(item => {
  if (!result[item.nama]) { //pembuatan onject baru jika tidak ada dalam result
    result[item.nama] = { nama: item.nama, total_out: 0 }; // bentuk object 
  }
 //mencari nilai total_out dengan cara mencari jumlah_out dan mentotalnya sesuai nama barang yang sedang diproses
  result[item.nama].total_out += item.jumlah_out; 
});

const outputArray = Object.values(result);

console.log(outputArray);
console.log(result);