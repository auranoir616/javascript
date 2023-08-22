let mypromise = new Promise((resolve, reject) =>{
    resolve("promise berhasil dijalankan")
})

mypromise 
.then(saatResolve, saatReject)
.catch((error)=>{console.log(error)})
.finally(console.log("promise dijalankan"))

function saatResolve(result){
    console.log(result)
}
function saatReject(result){
    console.log(result)
}