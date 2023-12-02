/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const enemies = 20
const enemiesArray = []
let gameframe = 0

class Enemy {
    constructor(){
        this.enemyImage = new Image()
        this.enemyImage.src = './aset/enemy4.png'
        this.speed = Math.random() * 4 + 1
        this.spritewidth = 213
        this.spriteheight = 213
        this.width = this.spritewidth / 2;
        this.height = this.spriteheight / 2;
        this.x = Math.random()* (canvas.width - this.width);
        this.y = Math.random()* (canvas.height - this.height);
        this.newX =  Math.random()* canvas.width
        this.newY =  Math.random()* canvas.height
        this.frame = 0
        this.flapspeed = Math.floor(Math.random() * 3 + 1)
        this.interval = Math.floor(Math.random() * 200 +50)

    }
    update(){
        if (gameframe % this.interval === 0){
            this.newX =  Math.random()* (canvas.width - this.width);
            this.newY =  Math.random()* (canvas.height - this.height);
    
        }
        let dx = this.x - this.newX
        let dy = this.y - this.newY
        this.x -= dx/20;
        this.y -= dy/20;
        if(this.x + this.width < 0 ) this.x = canvas.width
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
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemiesArray.forEach(enemy=>{
        enemy.draw()
        enemy.update()
    })
    gameframe++
    requestAnimationFrame(animate)
}
animate()

