/** @type {HTMLCanvasElement} */
document.addEventListener('DOMContentLoaded',function(){
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 800

class Game{ //class untuk menampilkan gambar
    constructor(ctx, width, height){
        this.ctx = ctx
        this.width = width
        this.height = height
        this.enemies = [] //array untuk menyimpan NPC yang tergenerate
        this.enemyinterval = 1000 //memunculkan NPC baru tiap 1 detik
        this.enemyTimer = 0 //Timer yang digunakan untuk menghitung waktu sejak musuh terakhir muncul.
        this.enemyTypes = ['worm', 'ghost','spider'] //Array berisi jenis-jenis musuh yang dapat muncul.
    }
    update(deltaTime){
        this.enemies = this.enemies.filter(object =>!object.markedForDeletion) //Menghapus musuh yang ditandai untuk dihapus dari array enemies
        // Jika timer mencapai interval waktu tertentu, panggil metode #addNewEnemy() untuk menambahkan musuh baru dan reset timer.
        if(this.enemyTimer > this.enemyinterval){
            this.#addNewEnemy()
            this.enemyTimer = 0
            console.log(this.enemyTimer)
        }else{
            // Jika belum mencapai interval waktu, tambahkan deltaTime ke timer.
            this.enemyTimer += deltaTime
        }
        // Memanggil metode update pada setiap objek musuh.
        this.enemies.forEach(object => object.update(deltaTime))
    }   
     //Memanggil metode draw pada setiap objek musuh dengan melewatkan konteks render canvas (ctx).
    draw(){ 
        this.enemies.forEach(object => object.draw(this.ctx))
    }
    //  Metode pribadi (private) untuk menambahkan musuh baru ke dalam array enemies.
    #addNewEnemy(){
        // Memilih secara acak jenis musuh dari array enemyTypes.
        const randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)]
        //menambahkan onjeck baru ke array sesuai hasil random yang muncul 
       if(randomEnemy == 'worm') this.enemies.push(new Worm(this))
       else if(randomEnemy == 'ghost') this.enemies.push(new Ghost(this))
       else if(randomEnemy == 'spider') this.enemies.push(new Spider(this))
    }
}
class Enemy{
    constructor(game){
        this.game = game //Menyimpan objek Game sebagai properti objek Enemy.
        this.x = this.game.width //Menetapkan posisi awal x musuh di sisi kanan layar (lebar layar game).
        this.y = Math.random() * this.game.height // Menetapkan posisi awal y musuh secara acak dalam kisaran tinggi layar game.
        this.width = 100 //Menetapkan lebar awal musuh.
        this.height = 100 //Menetapkan tinggi awal musuh
        this.markedForDeletion = false //Properti yang menandakan apakah objek musuh ini akan dihapus atau tidak.
        this.frameX = 0 //Properti yang menyimpan posisi frame horizontal (koordinat X) untuk animasi sprite.
        this.maxFrame = 5 // Jumlah maksimum frame animasi.
        this.frameInterval = 100  //Interval waktu antara setiap perpindahan frame animasi. milidetik
        this.frameTimer = 0 //Timer untuk menghitung waktu sejak perpindahan frame terakhir.
    }
    //?Metode untuk memperbarui status objek musuh.
    //? Menerima parameter deltaTime, yang merupakan selisih waktu antara pembaruan frame.
    update(deltaTime){
        this.x-= this.vx * deltaTime //Menggerakkan objek musuh ke kiri berdasarkan kecepatan horizontal (vx)
        if(this.x < 0 - this.width) this.markedForDeletion = true //Jika objek musuh keluar dari layar ke kiri, tandai untuk dihapus.
        // Jika timer mencapai interval waktu tertentu, lakukan perpindahan frame animasi.
        if(this.frameTimer > this.frameInterval){
            // Jika belum mencapai frame terakhir, pindahkan ke frame berikutnya.
            if(this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0 // Jika sudah mencapai frame terakhir, kembali ke frame pertama.
            this.frameTimer = 0 //Reset timer untuk perpindahan frame.
        }else{
            this.frameTimer += deltaTime
        }
    }
    draw(ctx){
        ctx.drawImage(this.image,this.frameX * this.spriteWidth,0, this.spriteWidth,this.spriteHeigth, this.x,this.y, this.width, this.height)

    }
}
// Mendefinisikan kelas Worm yang merupakan turunan dari kelas Enemy.
//  Ini berarti Worm akan memiliki properti dan metode yang sama dengan Enemy,
//  dan juga dapat menambahkan atau mengganti perilaku tertentu.

// Konstruktor kelas Worm yang memanggil konstruktor kelas Enemy menggunakan super(game). 
// Parameter game diteruskan ke konstruktor kelas induk.
class Worm extends Enemy{
    constructor(game){
        super(game)
        this.spriteWidth = 229
        this.spriteHeigth = 171
        this.x = this.game.width
        this.y = this.game.height - this.height
        this.width = this.spriteWidth/2
        this.height = this.spriteHeigth/2
        this.image = worm
        this.vx = Math.random() * 0.1 + 0.1 //Inisialisasi kecepatan horizontal (vx) dengan nilai acak antara 0.1 dan 0.2. Hal ini memberikan elemen kejutan atau variasi kecepatan pergerakan Worm di layar.
    }
}

class Ghost extends Enemy{
    constructor(game){
        super(game)
        this.spriteWidth = 261
        this.spriteHeigth = 209
        this.x = this.game.width
        this.y = Math.random() * this.game.height * 0.6
        this.width = this.spriteWidth/2
        this.height = this.spriteHeigth/2
        this.image = ghost
        this.vx = Math.random() * 0.2 + 0.1
        this.angle = 0
        this.curve = Math.random() * 3
    }
    update(deltaTime){
        super.update(deltaTime)
        this.y += Math.sin(this.angle) * this.curve
        this.angle+=0.04
    }
    draw(ctx){
        ctx.save()
        ctx.globalAlpha = 0.7
        super.draw(ctx)
        ctx.restore()
    }
}
class Spider extends Enemy{
    constructor(game){
        super(game)
        this.spriteWidth = 310
        this.spriteHeigth = 175
        this.x = Math.random() * this.game.width
        this.y = 0 - this.height
        this.width = this.spriteWidth/2
        this.height = this.spriteHeigth/2
        this.image = spider
        this.vx = 0
        this.vy = Math.random() * 0.1 + 0.1
        this.maxLength = Math.random() * this.game.height
    }
    update(deltaTime){
        super.update(deltaTime)
        if(this.y < 0 - this.height * 2) this.markedForDeletion = true

        this.y += this.vy * deltaTime
        if(this.y > this.maxLength) this.vy *= -1

    }
    draw(ctx){
        ctx.beginPath()
        ctx.moveTo(this.x + this.width/2,0)
        ctx.lineTo(this.x + this.width/2 , this.y)
        ctx.stroke()
        super.draw(ctx)
    }
}
const game = new Game(ctx, canvas.width, canvas.height)

let lastTime = 1
function animate(timeStamp){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    game.update(deltaTime)
    game.draw()
    requestAnimationFrame(animate)
}
animate(0)
})