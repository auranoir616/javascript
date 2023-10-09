const a = [
{nama:"apel", jumlah: 5},
{nama:"jeruk", jumlah: 10},
{nama:"anggur", jumlah: 7},
{nama:"melon", jumlah: 6},
]
const b = [
    {nama:"apel", jumlah: 5},
    {nama:"semangka", jumlah: 4},
    {nama:"duku", jumlah: 2},
    {nama:"apel", jumlah: 6},
    ]

    const c = []
const fil = a.filter(data =>{
    data.nama === "apel"
})
c.push(fil)
console.log(c)