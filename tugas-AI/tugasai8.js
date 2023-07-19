let suhu = 0;
let konversi = 's'

if (konversi === 'F'){
    console.log((suhu * 9/5) + 32," fahrenheit")
}else if( konversi === 'C'){
    console.log((suhu - 32) * 5/9, "celcius")
}else {
    console.log('hanya C ke F dan sebaliknya')
}