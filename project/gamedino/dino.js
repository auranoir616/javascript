// Mengambil elemen canvas dari dokumen HTML dan menyimpannya dalam variabel canvas
const canvas = document.getElementById("gameCanvas");

// Mendapatkan "context" (konteks) dari elemen canvas, yang akan digunakan untuk menggambar elemen di atasnya
const ctx = canvas.getContext("2d");

// Inisialisasi variabel-variabel game
let dinoX = 50; // Posisi awal dinosaurus di sumbu X (horizontal)
let dinoY = canvas.height - 70; // Posisi awal dinosaurus di sumbu Y (vertikal)
let dinoWidth = 50; // Lebar dinosaurus
let dinoHeight = 50; // Tinggi dinosaurus
let isJumping = false; // Menyimpan status apakah dinosaurus sedang melompat atau tidak
let jumpCount = 0; // Menyimpan jumlah frame yang sudah dilompati saat melompat
let gravity = 2; // Menyimpan nilai gravitasi yang akan digunakan saat dinosaurus jatuh
let cactusX = canvas.width; // Posisi awal kaktus di sumbu X (horizontal)
let cactusWidth = 20; // Lebar kaktus
let cactusHeight = 50; // Tinggi kaktus
let score = 0; // Skor pemain

// Fungsi untuk menggambar dinosaurus
function drawDino() {
  ctx.fillStyle = "green"; // Warna untuk mengisi bentuk dinosaurus
  ctx.fillRect(dinoX, dinoY, dinoWidth, dinoHeight); // Menggambar bentuk persegi panjang (dinosaurus) pada posisi dan ukuran yang ditentukan
}

// Fungsi untuk menggambar kaktus
function drawCactus() {
  ctx.fillStyle = "brown"; // Warna untuk mengisi bentuk kaktus
  ctx.fillRect(cactusX, canvas.height - cactusHeight, cactusWidth, cactusHeight); // Menggambar bentuk persegi panjang (kaktus) pada posisi dan ukuran yang ditentukan
}

// Fungsi untuk menggambar skor
function drawScore() {
  ctx.fillStyle = "black"; // Warna untuk teks skor
  ctx.font = "20px Arial"; // Font dan ukuran teks skor
  ctx.fillText("Score: " + score, 20, 30); // Menampilkan teks skor pada posisi (20, 30)
}

// Fungsi utama permainan yang akan berjalan di setiap frame
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Membersihkan canvas untuk menghapus elemen-elemen sebelumnya

  // Update posisi kaktus
  cactusX -= 5; // Menggerakkan kaktus ke kiri dengan mengurangi nilai posisi X

  // Jika kaktus berada di luar layar, buat kaktus baru dan tambahkan skor
  if (cactusX + cactusWidth < 0) {
    cactusX = canvas.width;
    score++;
  }

  // Update posisi dinosaurus saat melompat
  if (isJumping) {
    dinoY -= 10 - jumpCount; // Mengangkat dinosaurus ke atas dengan mengurangi nilai posisi Y
    jumpCount--; // Mengurangi jumlah frame yang harus dilompati
    if (jumpCount === 0) {
      isJumping = false; // Menghentikan proses melompat ketika jumlah frame yang dilompati sudah habis
    }
  } else {
    // Jika dinosaurus tidak sedang melompat, berarti dia sedang jatuh
    if (dinoY < canvas.height - dinoHeight) {
      dinoY += gravity; // Menggerakkan dinosaurus ke bawah dengan menambahkan nilai gravitasi pada posisi Y
    }
  }

  // Menggambar elemen-elemen game
  drawDino();
  drawCactus();
  drawScore();

  // Deteksi tabrakan dengan kaktus
  if (
    dinoX + dinoWidth > cactusX &&
    dinoX < cactusX + cactusWidth &&
    dinoY + dinoHeight > canvas.height - cactusHeight
  ) {
    gameOver(); // Jika terjadi tabrakan, panggil fungsi gameOver()
  } else {
    requestAnimationFrame(gameLoop); // Jika tidak ada tabrakan, lanjutkan permainan dengan memanggil gameLoop() lagi pada frame selanjutnya
  }
}

// Fungsi untuk menginisialisasi permainan
function startGame() {
  isJumping = false;
  jumpCount = 0;
  gravity = 2;
  cactusX = canvas.width;
  score = 0;
  gameLoop(); // Mulai permainan dengan memanggil gameLoop() untuk pertama kali
}

// Fungsi untuk mengakhiri permainan dan menampilkan skor
function gameOver() {
  alert("Game Over. Your Score: " + score); // Menampilkan pesan Game Over dengan skor pemain
  startGame(); // Memulai permainan kembali setelah game over
}

// Fungsi untuk menghandle input keyboard
function handleKeyPress(event) {
  if (event.keyCode === 32 && !isJumping) {
    isJumping = true; // Ketika tombol spasi ditekan, dinosaurus akan melompat jika tidak sedang dalam proses melompat
    jumpCount = 10; // Mengatur jumlah frame yang harus dilompati saat melompat
  }
}

// Menambahkan event listener untuk mendengarkan tombol yang ditekan
document.addEventListener("keydown", handleKeyPress);

// Memulai permainan untuk pertama kali
startGame();
