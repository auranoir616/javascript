/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const enemies = 15
const enemiesArray = [] // untuk menyimpan beberapa NPC
let gameframe = 0 

class Enemy {
    constructor(){
        this.enemyImage = new Image()
        this.enemyImage.src = './aset/enemy1.png'
        this.spritewidth = 293 //lebar tiap NPC dalam aset gambar
        this.spriteheight = 155 //tinggi tiap NPC dalam aset gambar
        this.width = this.spritewidth / 2.5; //lebar tiap NPC
        this.height = this.spriteheight / 2.5; //tinggi Tiap NPC
        this.x = Math.random()* (canvas.width - this.width); //tempat muncul NPC dalam sumbu x
        this.y = Math.random()* (canvas.height - this.height);  //tempat muncul NPC dalam sumbu y
        this.frame = 0
        this.flapspeed = Math.floor(Math.random() * 3 + 1) // kecepatan pergerakan tiap NPC
    }
    update(){
        this.x+= Math.random() * 5 - 2.5 //pergerakan NPC dari sumbu x
        this.y+= Math.random() * 5 - 2.5 //pergerakan NPC dari sumbu y
        if(gameframe % this.flapspeed === 0 ){ //pergerakan NPC tiap frame
        this.frame > 4 ? this.frame = 0 : this.frame++ ; 
    }
}
    draw(){ //menampilkan gambar dalam canvas
        ctx.drawImage(this.enemyImage,this.frame * this.spritewidth,0,this.spritewidth,
                        this.spriteheight, this.x, this.y, this.width, this.height)
    }
}
for (let x=0;x<enemies;x++){
enemiesArray.push(new Enemy())
}
console.log(enemiesArray)
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemiesArray.forEach(enemy=>{
        enemy.draw()
        enemy.update()
    })
    gameframe++
    requestAnimationFrame(animate)
}
animate()

