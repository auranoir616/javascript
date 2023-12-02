/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const enemies = 10
const enemiesArray = []
let gameframe = 0

class Enemy {
    constructor(){
        this.enemyImage = new Image()
        this.enemyImage.src = './aset/enemy2.png'
        this.speed = Math.random() * 4 + 1 // kecepatan gambar dari kanan ke kiri
        this.spritewidth = 266 // lebar tiap frame gambar
        this.spriteheight = 188// tinggi tiap frame gambar
        this.width = this.spritewidth / 2.5; //lebar tiap gambar saat ditampilkan dicanvas 
        this.height = this.spriteheight / 2.5;  //tinggi tiap gambar saat ditampilkan dicanvas 
        this.x = Math.random()* (canvas.width - this.width); // posisi sumbu X saat gambar ditampilkan
        this.y = Math.random()* (canvas.height - this.height);// posisi sumbu Y saat gambar ditampilkan
        this.frame = 0  //frame awal pada gambar saat ditampilkan
        this.flapspeed = Math.floor(Math.random() * 3 + 1) //kecepatan FPS per gambar secara random
        this.angle = 0 //sudut awal gerak pada tiap gambar
        this.anglespeed =  Math.random() * 0.2 // kecepatan pergerakan naik-turun tiap gambar 
        this.curve = Math.random() * 10 // ketinggian pergerakan naik-turun tiap gambar
    }
    update(){
        this.x -= this.speed // kecepatan tiap frame gambar dari kanan ke kiri
        this.y +=  this.curve * Math.sin(this.angle) //jarak pergerakan tiap frame dari atas ke bawah
        this.angle +=  this.anglespeed // kecepatan tiap frame gambar dari atas ke bawah
        // akan mereset posisi tiap gambar ke posisi semula 
        //dengan mengembalikan value x ke canvas.width (sisi canvas kanan) jika 
        //hasil dari posisi x tiap frame + lebar tiap frame < 0
        if(this.x + this.width < 0 ) this.x = canvas.width 
        //!
        if(gameframe % this.flapspeed === 0 ){
        this.frame > 4 ? this.frame = 0 : this.frame++ ;
    }
}
    draw(){
        ctx.drawImage(this.enemyImage,this.frame * this.spritewidth,0,this.spritewidth,
                        this.spriteheight, this.x, this.y, this.width, this.height)
    }
}
for (let x=0;x<enemies;x++){
enemiesArray.push(new Enemy())
}
console.log(enemiesArray)
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT) //akan membersihkan frame yang sudah dilewati gambar
    enemiesArray.forEach(enemy=>{
        enemy.draw()
        enemy.update()
    })
    gameframe++
    requestAnimationFrame(animate)
}
animate()

