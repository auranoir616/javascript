// memilih animasi
let playerState = 'idle'
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e){
    playerState = e.target.value
})
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image()
playerImage.src = './aset/shadow_dog.png'
//ukuran setiap frame dalam gambar
const spriteWidth = 575
const spriteHeight = 523

let gameFrame = 0
let staggerFrame = 5 // kecepatan fps
const spriteAnimation = []
const animationState = [
    {
        name: 'idle', // nama frame
        frames: 7, //jumlah frame
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },
]
//menentukan lokasi setiap frame dengan nengalikan posisi X * lebar dan Y * tinggi 
//dan mempushnya ke array loc dengan X dan Y yang sudah didapatkan
animationState.forEach((state, index)=>{
    let frames = {
        loc: [],//lokadi setiap frame pada keseluruhan gambar
    }
    for(let j = 0; j <state.frames; j++){
        let positionX = j * spriteWidth; //menentukan posisi X setiap frame dengan mengalikan jumlah frame dengan lebar setiap frame 
        let positionY = index * spriteHeight; //menentukan posisi Y setiap frame dengan mengalikan Index (dr atas kebawah) frame dengan tinggi setiap frame 
        frames.loc.push({x: positionX, y:positionY})
    }
    //menambahkan array loc ke spriteAnimation dengan nama dari setiap frame animationState 
    spriteAnimation[state.name] = frames

})
console.log(spriteAnimation)
function animate(){
    ctx.clearRect(0, 0,CANVAS_HEIGHT,CANVAS_WIDTH)
    // menentukan posisi/frame yang akan ditampilkan dgn melakukan pembulatan dari hasil gameframe / stagerFrame yang terus bertambah
    // dan memoduluskan dengan panjang dari loc setiap frame sehingga menghasilkan posisi berupa index setiap frame [0-...] 
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimation[playerState].loc.length;
    // frameX dihasilkan dari hasil kali antara lebar frame yang akan ditampilkan dengan position (575 * 1, 575*2 dst) 
    let frameX = spriteWidth * position; 
    // frameY ditentukan oleh value dari loc.y dari setiap animasi dalam spriteanimation
    let frameY = spriteAnimation[playerState].loc[position].y
    //menampilkan gambar sesuai parameter yang didapat
    ctx.drawImage(playerImage, frameX, frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight)
    // value gameFrame terus bertambah agar gambar bisa bergerak
    gameFrame++
    requestAnimationFrame(animate)
}
animate()

