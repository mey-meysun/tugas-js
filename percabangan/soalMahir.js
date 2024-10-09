// no 1
// let jamMasuk = Number(prompt("Jam Masuk:", 0));
// let jamKeluar = Number(prompt("Jam Keluar:", 0));

// if (jamMasuk >= 1 && jamMasuk <= 12 && jamKeluar >= 1 && jamKeluar <= 12) {
//   if (jamKeluar <= jamMasuk) {
//     jamKeluar += 12;
//     let lamaBekerja = jamKeluar - jamMasuk;
//     alert(`Lama Bekerja ${lamaBekerja} jam`);
//   } else {
//     lamaBekerja = jamKeluar - jamMasuk;
//     alert(`Lama Bekerja ${lamaBekerja} jam`);
//   }
// } else {
//   alert("Masukkan angka yang sesuai!");
// }

// no 2
// let jamMasuk = Number(prompt("Jam Masuk:", 0));
// let jamKeluar = Number(prompt("Jam Keluar:", 0));

// if (jamMasuk >= 1 && jamMasuk <= 12 && jamKeluar >= 1 && jamKeluar <= 12) {
//   let lamaParkir;
//   let harga = 1500;

//   if (jamKeluar <= jamMasuk) {
//     jamKeluar += 12;
//   }

//   lamaParkir = jamKeluar - jamMasuk;

//   if (lamaParkir <= 2) {
//     alert(`Lama Parkir ${lamaParkir} jam harga ${harga}`);
//   } else {
//     harga = 1500 + (lamaParkir - 2) * 1000;
//     alert(`Lama Parkir ${lamaParkir} jam harga ${harga}`);
//   }
// }

// no 3
let jamMulai = Number(prompt("Jam Mulai: \n (1-12)", 0));
let menitMulai = Number(prompt("Menit Mulai: \n (1-59)", 0));

let jamSelesai = Number(prompt("Jam Selesai: \n (1-12)", 0));
let menitSelesai = Number(prompt("Menit Selesai: \n (1-59)", 0));

if (jamMulai >= 1 && jamMulai <= 12 && jamSelesai >= 1 && jamSelesai <= 12) {
  let totalMenitSelesai = jamSelesai * 60 + menitSelesai;
  let totalMenitMulai = jamMulai * 60 + menitMulai;

  if (totalMenitSelesai <= totalMenitMulai) {
    totalMenitSelesai += 12 * 60;
  }

  let selisihMenit = totalMenitSelesai - totalMenitMulai;

  let lamaJam = Math.floor(selisihMenit / 60);
  let lamaMenit = selisihMenit % 60;

  alert(
    `Lama Menit adalah ${selisihMenit} \nLama waktu adalah ${lamaJam} jam ${lamaMenit} menit`
  );
} else {
  alert('Mohon masukkan angka yang sesuai!')
}
