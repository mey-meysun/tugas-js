let hasil;

let tambah = (a,b) => {
  hasil = a + b
  alert(`Hasil dari penjumlahan ${angka1} + ${angka2} = ${hasil}`);
};

let kurang = (a,b) => {
  hasil = a - b
  alert(`Hasil dari pengurangan ${angka1} - ${angka2} = ${hasil}`);
};

let kali = (a,b) => {
  hasil = a * b
  alert(`Hasil dari perkalian ${angka1} * ${angka2} = ${hasil}`);
};

let bagi = (a,b) => {
  hasil = a / b
  alert(`Hasil dari pembagian ${angka1} / ${angka2} = ${hasil}`);
};

let operator = prompt(
  `Masukkan operator: 
  \n + (penjumlahan) \n - (pengurangan) \n * (pekalian) \n / (pembagian) \n`,
  "+"
);

let angka1 = Number(prompt("masukkan angka pertama :", 0));
let angka2 = Number(prompt("masukkan angka kedua :", 0));

if (operator == "+") {
  tambah(angka1,angka2)
} else if (operator == "-") {
  kurang(angka1,angka2)
} else if (operator == "*") {
  kali(angka1,angka2)
} else if (operator == "/") {
  bagi(angka1,angka2)
} else {
  alert(`Operasi tidak valid!`);
}
