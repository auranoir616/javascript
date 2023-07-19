let nilai = 89;

if(nilai === 100){
    console.log('A')
}else if(nilai > 90 && nilai < 100){
    console.log("B")
}else if(nilai < 90 && nilai > 75){
    console.log('C')
}else if(nilai < 75 && nilai > 60){
    console.log('D')
}else if(nilai < 60 && nilai > 50){
    console.log('E')
}else{
    console.log('F')
}