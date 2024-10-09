// no 1 (rata rata)
// let jumlahPrompt = Number(
//   prompt("Berapa jumlah nilai yang ingin anda masukkan?", 0)
// );

// function jumlahNilai(n) {
//   let nilaiArray = [];
//   for (let i = 0; i < n; i++) {
//     let nilai = Number(prompt(`Masukkan nilai ke-${i + 1}:`, 0));
//     nilaiArray.push(nilai);
//   }

//   return nilaiArray;
// }

// function rataRata(...nilai) {
//   let rataRata = 0;
//   for (const jumlah of nilai) {
//     rataRata = rataRata + jumlah / nilai.length;
//   }

//   return rataRata;
// }

// let nilaiArray = jumlahNilai(jumlahPrompt)
// alert(`Nilai rata-rata = ${rataRata(nilaiArray).toFixed(2)}`);

// no 2 (mengurutkan angka)
// let jumlahPrompt = Number(
//   prompt("Berapa jumlah nilai yang ingin anda masukkan?", 0)
// );

// function jumlahAngka(n) {
//   let angkaArray = [];
//   for (let i = 0; i < n; i++) {
//     let angka = Number(prompt(`Masukkan angka ke-${i + 1}:`, 0));
//     angkaArray.push(angka);
//   }

//   return angkaArray;
// }

// let angkaArray = jumlahAngka(jumlahPrompt);

// let operasi = Number(
//   prompt(
//     `Pilih Operasi : \n 1. Dari Terkecil ke Terbesar  \n 2. Dari Terbesar ke Terkecil`,
//     0
//   )
// );

// angkaArray.sort(function (a, b) {
//   if (operasi == 1) {
//     return a - b;
//   } else {
//     return b - a;
//   }
// });

// alert(angkaArray.join(" - "));

// no 3 (angka terbesar)
// let jumlahPrompt = Number(
//   prompt("Berapa jumlah nilai yang ingin anda masukkan?", 0)
// );

// function jumlahAngka(n) {
//   let angkaArray = [];
//   for (let i = 0; i < n; i++) {
//     let angka = Number(prompt(`Masukkan angka ke-${i + 1}:`, 0));
//     angkaArray.push(angka);
//   }

//   return angkaArray;
// }

// let angkaArray = jumlahAngka(jumlahPrompt);

// let besar = Math.max(...angkaArray);

// alert(`Angka terbesar = ${besar}`);

// no 4 (fibonacci)
// let n = Number(prompt("Masukkan nilai n:", 0));

// function fibonacci(n) {
//   let fiboArray = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
//   }

//   return fiboArray;
// }

// fiboArray = fibonacci(n);
// alert(
//   `Deret Fibonacci hingga ke-${n} adalah : \n ${fiboArray
//     .slice(0, n)
//     .join(", ")}`
// );
