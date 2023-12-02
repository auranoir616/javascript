const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 10;

const backgroundLayer1 = new Image()
backgroundLayer1.src = "./aset/layer-1.png"
const backgroundLayer2 = new Image()
backgroundLayer2.src = "./aset/layer-2.png"
const backgroundLayer3 = new Image()
backgroundLayer3.src = "./aset/layer-3.png"
const backgroundLayer4 = new Image()
backgroundLayer4.src = "./aset/layer-4.png"
const backgroundLayer5 = new Image()
backgroundLayer5.src = "./aset/layer-5.png"

window.addEventListener('load', function(){
const slider = document.getElementById('slider')
slider.value = gameSpeed
const showgamespeed = document.getElementById('showgamespeed')
showgamespeed.innerHTML = gameSpeed
slider.addEventListener('change', function(e){
 console.log(e)
 gameSpeed = e.target.value
 showgamespeed.innerHTML = e.target.value
})

class layer{
    constructor(image, speedModifier){
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier;
        }
        update(){ // mengubah kecepatan dengan mengalikan gamespeed dgn speedmodifier
            this.speed = gameSpeed * this.speedModifier
            //jika x kurang dari -2400 maka x akan kembali 0
            if(this.x <= -this.width){ 
                this.x = 0
            }   //untuk mengatur kecepatan setiap gambar
                this.x = this.x - this.speed
        }
        draw(){
            // membuat gambar pada canvas dgn parameter (image,posisiX, posisiY,lebar,tinggi)
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
            // membuat gambar kedua pada canvas dgn posisiX + lebar gambar [jadi gambar akan tampak 2 baris]
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
        }

}
//menjalankan class dengan menambahkan parameter gambar dan value speedModifier
const layer1 = new layer(backgroundLayer1, 0.2)
const layer2 = new layer(backgroundLayer2, 0.4)
const layer3 = new layer(backgroundLayer3, 0.6)
const layer4 = new layer(backgroundLayer4, 0.8)
const layer5 = new layer(backgroundLayer5, 1)

const gameObject =[layer1, layer2, layer3, layer4,layer5] 
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
   gameObject.forEach(object =>{
    object.update()
    object.draw()
   })
    requestAnimationFrame(animate)
}
animate()

})