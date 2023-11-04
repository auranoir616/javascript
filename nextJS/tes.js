fetch('https://api.covid19api.com/all')
.then(response => response.json())
.then(data =>{
    // const isi =[]
    // isi.push(data[4])
    console.log(data)
})
.catch((err)=>{
    console.log("error",err)
})