
// function imagebg(event){
//     const img = event.CurrentTarget
//     const bg = "url(${bg})"
//     document.body.style.backgroundImage= bg
// }
//     const images = document.getElementsByTagName("img")
//     for(const img of images){
//         img.addEventListener("click", imagebg)
    
// }
// function imagebg (){
//     var index = document.getElementsByClassName("img")
//     for (var i =0;i<index.length;i++){
//     const image = index[i]

//     image.addEventListener("click",function(){
//         const bg = image.src
//         document.body.style.backgroundImage=`url(${bg})`
//     })
//     }   
// }
function imagebg(){
    var img = document.getElementsByTagName("img")
for (i=0;i<img.length;i++){
    var image = img[i]
    //mendapatkan nilai index dari gambar yang di klik
image.addEventListener("click",function(){
    var bg = this.src;
    document.body.style.backgroundImage = `url(${bg})`
    //metode untuk mengubah bg sesuai gambar yang di klik
})
}
}