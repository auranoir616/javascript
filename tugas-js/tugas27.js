var kalimat1 = ["No"," rumah saya ",30, "A"]
var kalimat2 = ['Jalan pangeran Tirtayasa No', 70]

console.log(kalimat1.join(""))
var kalimat3 = (accumulator,currentvalue)=>accumulator + currentvalue
console.log(kalimat1.reduce(kalimat3))
console.log(kalimat2.reduce(kalimat3))
