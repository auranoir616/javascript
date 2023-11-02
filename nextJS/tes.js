fetch('https://data.covid19.go.id/public/api/prov_time.json')
.then(response => response.json())
.then(data =>{
    // const isi =[]
    // isi.push(data[4])
    console.log(data)
})
.catch((err)=>{
    console.log("error",err)
})