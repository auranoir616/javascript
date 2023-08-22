function p1(){
    console.log("proses 1 selesai")
}
function p2(callback){
    setTimeout(()=>{
        console.log("proses 2 selesai")
        callback()
    },3000)
}
function p3(){
    console.log("proses 3 selesai")
}

p1()
p2(p3)