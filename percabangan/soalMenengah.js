// no 1 (mencari angka terbesar)
// let a = Number(prompt("masukkan angka pertama:", 0));
// let b = Number(prompt("masukkan angka kedua:", 0));

// let hasil = Math.max(a, b);
// alert(`Bilangan terbesar antara ${a} dan ${b} adalah ${hasil}`);

// no 2 (mencari persamaan akar 2 variable)
let a = Number(prompt("masukkan nilai a:", 0));
let b = Number(prompt("masukkan nilai b:", 0));
let c = Number(prompt("masukkan nilai c:", 0));

let d = Math.pow(b, 2) - 4 * a * c;

if (d > 0) {
  alert("Persamaan memiliki dua akar real yang berbeda");
} else if (d === 0) {
  alert("Persamaan memiliki dua akar real yang sama");
} else if (d < 0) {
  alert("Persamaan memiliki dua akar imaginer");
} else {
    alert("Harap masukkan angka yang sesuai");
}

// no 3 (nilai uts, uas, dan tugas)
// let uts = Number(prompt("masukkan nilai UTS:", 0));
// let uas = Number(prompt("masukkan nilai UAS:", 0));
// let tugas = Number(prompt("masukkan nilai Tugas:", 0));

// let na= (uts*35/100)+(uas*45/100)+(tugas*20/100);

// if( na >=80 && na<=100){
//   alert("Selamat kamu mendapatkan nilai A");
// } else if(na >=70 && na<80) {
//   alert("Selamat kamu mendapatkan nilai B");
// } else if(na >=50 && na<70) {
//     alert("Selamat kamu mendapatkan nilai C");
// } else if(na >=40 && na<50) {
//     alert("Selamat kamu mendapatkan nilai D");
// } else if (na < 40) {
//     alert("Selamat kamu mendapatkan nilai E");
// } else {
//     alert("Harap masukkan angka yang sesuai");
// }

// no 4 (mencari bilangan terbesar antara 3 angka)
// let x = Number(prompt("masukkan angka pertama:", 0));
// let y = Number(prompt("masukkan angka kedua:", 0));
// let z = Number(prompt("masukkan angka ketiga:", 0));

// if (x !== y && y !== z && x !== z) {
//   let hasil = Math.max(x, y, z);
//   alert(`Bilangan terbesar antara ${x}, ${y} dan ${z} adalah ${hasil}`);
// } else {
//   alert(`Bilangan tidak boleh sama!`);
// }

// no 5 (mencari kuadran)
// let x = Number(prompt("masukkan nilai x:", 0));
// let y = Number(prompt("masukkan nilai y:", 0));

// if (x > 0 && y > 0) {
//   alert(`Nilai (${x}, ${y}) berada di kuadran 1`);
// } else if (x < 0 && y > 0) {
//   alert(`Nilai (${x}, ${y}) berada di kuadran 2`);
// } else if (x < 0 && y < 0) {
//   alert(`Nilai (${x}, ${y}) berada di kuadran 3`);
// } else {
//   alert(`Nilai (${x}, ${y}) berada di kuadran 4`);
// }

// no 6 (mencari hari berdasrkan bulan dan tanggal)
// let tanggal = Number(prompt("masukkan tanggal: (1-31)", 0));
// let bulan = Number(prompt("masukkan bulan : (1-12)", 0));

// if (bulan == 1) {
//   if (tanggal >= 1 && tanggal <= 31) {
//     let hari = tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 2) {
//   if (tanggal >= 1 && tanggal <= 28) {
//     let hari = 31 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 3) {
//   if (tanggal >= 1 && tanggal <= 31) {
//     let hari = 31 + 28 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 4) {
//   if (tanggal >= 1 && tanggal <= 30) {
//     let hari = 31 + 28 + 31 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 5) {
//   if (tanggal >= 1 && tanggal <= 31) {
//     let hari = 31 + 28 + 31 + 30 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 6) {
//   if (tanggal >= 1 && tanggal <= 30) {
//     let hari = 31 + 28 + 31 + 30 + 31 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 7) {
//   if (tanggal >= 1 && tanggal <= 31) {
//     let hari = 31 + 28 + 31 + 30 + 31 + 30 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 8) {
//   if (tanggal >= 1 && tanggal <= 31) {
//     let hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 9) {
//   if (tanggal >= 1 && tanggal <= 30) {
//     let hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 10) {
//   if (tanggal >= 1 && tanggal <= 31) {
//     let hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 11) {
//   if (tanggal >= 1 && tanggal <= 30) {
//     let hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else if (bulan == 12) {
//   if (tanggal >= 1 && tanggal <= 31) {
//     let hari = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + tanggal;
//     alert(`Tanggal ${tanggal} dan bulan ${bulan} merupakan hari ke-${hari}`);
//   }
// } else {
//   alert("Mohon masukkan angka yang sesuai!");
// }