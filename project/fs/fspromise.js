const fs = require ("fs")

const readFile= (file, option) => new Promise ((resolve, reject)=>{
    fs.readFile(file,option,(err, data)=>{
        if (err) return reject(err)
        return resolve(data)
    })
})

const writeFile = (file, content) => new Promise((reslove, reject)=>{
    fs.writeFile(file, content, (err)=>{
        if(err) return reject(err);
        return reslove()
    })
})

let result = ''

readFile("file1.txt","utf-8")
.then(file1 =>{
    result += file1
    return readFile("file2.txt","utf-8")
})
.then(file2 =>{
    result += file2
    return readFile("file3.txt","utf-8")
})
.then(file3 =>{
    result += file3
    return writeFile("file4.txt",result)
})
.then(()=>{
    console.log(result)
    console.log("writing done!")
})
.catch(err =>{
    throw err
})