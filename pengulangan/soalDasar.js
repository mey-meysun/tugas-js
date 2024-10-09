// ~ No 1 ~
// let n = Number(prompt("Masukkan angka:", 0));

// if (n >= 1) {
//   for (let i = 1; i <= n; i++) {
//     alert(i);
//   }
// } else{
//     alert('Masukkan angka yang sesuai!')
// }

// ~ No 2 ~
// let batasAwal = Number(prompt("Masukkan batas awal angka:", 0));
// let batasAkhir = Number(prompt("Masukkan batas akhir angka:", 0));

// if (batasAwal <= batasAkhir && batasAwal > 0 && batasAkhir > 0) {
//   for (let tampil = batasAwal; tampil <= batasAkhir; tampil++) {
//     alert(tampil);
//   }
// } else{
//     alert('Masukkan angka yang sesuai!')
// }

// ~ No 3 ~
// let batasAwal = Number(prompt("Masukkan batas awal angka:", 0));
// let batasAkhir = Number(prompt("Masukkan batas akhir angka:", 0));

// if (batasAwal <= batasAkhir && batasAwal > 0 && batasAkhir > 0) {
//   for (let tampil = batasAwal; tampil <= batasAkhir; tampil++) {
//     if (tampil % 2 == 1) {
//       alert(tampil);
//     }
//   }
// } else {
//   alert("Masukkan angka yang sesuai!");
// }

// ~ No 4 ~
let batasAwal = Number(prompt("Masukkan batas awal angka:", 0));
let batasAkhir = Number(prompt("Masukkan batas akhir angka:", 0));

if (batasAwal <= batasAkhir && batasAwal > 0 && batasAkhir > 0) {
  for (let tampil = batasAwal; tampil <= batasAkhir; tampil++) {
    if (tampil % 5 == 0) {
      alert(tampil);
    }
  }
} else {
  alert("Masukkan angka yang sesuai!");
}

