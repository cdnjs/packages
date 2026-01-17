# Movey.js (Game Engine / Library Animasi Ringan)
Movey.js adalah sebuah library JavaScript yang dirancang untuk memudahkan pengembangan game dan animasi berbasis DOM. Dengan menggunakan Movey.js, Anda dapat menggerakkan elemen DOM dengan mudah dan cepat, sehingga memudahkan proses pengembangan game dan aplikasi interaktif.

## Deskripsi
Movey.js menyediakan sebuah kelas `Movement` yang memiliki beberapa metode untuk menggerakkan elemen DOM, seperti `right`, `left`, `up`, `down`, `imgAnimate`, `key`, `rotate`, dan `changeSize`. Kelas ini juga memiliki metode `stop` untuk menghentikan animasi yang sedang berjalan.

## Contoh Penggunaan
Berikut adalah contoh code snippet cara menggunakan Movey.js:
```javascript
const Move = new Movement();

// Menggerakkan elemen dengan id "player" ke kanan sejauh 100px dengan kecepatan 5px per frame
Move.right("#player", 100, 5);

// Menggerakkan elemen dengan id "player" ke kiri sejauh 50px dengan kecepatan 3px per frame
Move.left("#player", 50, 3);

// Menggerakkan elemen dengan id "player" ke atas sejauh 200px dengan kecepatan 10px per frame
Move.up("#player", 200, 10);

// Menggerakkan elemen dengan id "player" ke bawah sejauh 100px dengan kecepatan 5px per frame
Move.down("#player", 100, 5);

// Menganimasikan elemen dengan id "player" menggunakan array gambar
const images = ["gambar1.png", "gambar2.png", "gambar3.png"];
Move.imgAnimate("#player", images, 10);

// Menggerakkan elemen dengan id "player" menggunakan perintah keyboard
const commands = ["right(100, 5)", "left(50, 3)", "up(200, 10)"];
Move.key(commands, 1000);

// Mengrotasi elemen dengan id "player" sebesar 90 derajat dengan kecepatan 5 derajat per frame
Move.rotate("#player", 90, 5);

// Mengubah ukuran elemen dengan id "player" menjadi 200x200px dalam waktu 1 detik
Move.changeSize("#player", 200, 200, 1);
```
## Penjelasan Code
Berikut adalah penjelasan tentang kode di atas:

* `const Move = new Movement();`: Membuat instance dari kelas `Movement` yang merupakan inti dari library Movey.js.
* `Move.right("#player", 100, 5);`: Menggerakkan elemen dengan id "player" ke kanan sejauh 100px dengan kecepatan 5px per frame.
* `Move.left("#player", 50, 3);`: Menggerakkan elemen dengan id "player" ke kiri sejauh 50px dengan kecepatan 3px per frame.
* `Move.up("#player", 200, 10);`: Menggerakkan elemen dengan id "player" ke atas sejauh 200px dengan kecepatan 10px per frame.
* `Move.down("#player", 100, 5);`: Menggerakkan elemen dengan id "player" ke bawah sejauh 100px dengan kecepatan 5px per frame.
* `Move.imgAnimate("#player", images, 10);`: Menganimasikan elemen dengan id "player" menggunakan array gambar.
* `Move.key(commands, 1000);`: Menggerakkan elemen dengan id "player" menggunakan perintah keyboard.
* `Move.rotate("#player", 90, 5);`: Mengrotasi elemen dengan id "player" sebesar 90 derajat dengan kecepatan 5 derajat per frame.
* `Move.changeSize("#player", 200, 200, 1);`: Mengubah ukuran elemen dengan id "player" menjadi 200x200px dalam waktu 1 detik.

## Kelas Movement
Kelas `Movement` memiliki beberapa metode yang dapat digunakan untuk menggerakkan elemen DOM. Berikut adalah daftar metode yang tersedia:

* `right(element, distance, speed)`: Menggerakkan elemen ke kanan sejauh `distance` dengan kecepatan `speed`.
* `left(element, distance, speed)`: Menggerakkan elemen ke kiri sejauh `distance` dengan kecepatan `speed`.
* `up(element, distance, speed)`: Menggerakkan elemen ke atas sejauh `distance` dengan kecepatan `speed`.
* `down(element, distance, speed)`: Menggerakkan elemen ke bawah sejauh `distance` dengan kecepatan `speed`.
* `imgAnimate(element, images, fps)`: Menganimasikan elemen menggunakan array gambar dengan frame rate `fps`.
* `key(commands, speed)`: Menggerakkan elemen menggunakan perintah keyboard dengan kecepatan `speed`.
* `rotate(element, degree, speed)`: Mengrotasi elemen sebesar `degree` dengan kecepatan `speed`.
* `changeSize(element, height, width, second)`: Mengubah ukuran elemen menjadi `height`x`width` dalam waktu `second` detik.
* `stop(element)`: Menghentikan animasi yang sedang berjalan pada elemen.

Dengan menggunakan Movey.js, Anda dapat dengan mudah menggerakkan elemen DOM dan membuat animasi yang menarik. Library ini sangat cocok untuk pengembangan game dan aplikasi interaktif.