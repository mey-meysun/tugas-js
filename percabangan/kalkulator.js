let operator = prompt(
  `Masukkan operator: 
  \n + (penjumlahan) \n - (pengurangan) \n * (pekalian) \n / (pembagian) \n`,
  "+"
);

let angka1 = Number(prompt("masukkan angka pertama :", 0));
let angka2 = Number(prompt("masukkan angka kedua :", 0));
let hasil;

if (operator == "+") {
  hasil = angka1 + angka2
  alert(`Hasil dari penjumlahan ${angka1} + ${angka2} = ${hasil}`);
} else if (operator == "-") {
  hasil = angka1 - angka2
  alert(`Hasil dari pengurangan ${angka1} - ${angka2} = ${hasil}`);
} else if (operator == "*") {
  hasil = angka1 * angka2
  alert(`Hasil dari perkalian ${angka1} * ${angka2} = ${hasil}`);
} else if (operator == "/") {
  hasil = angka1 / angka2
  alert(`Hasil dari pembagian ${angka1} / ${angka2} = ${hasil}`);
} else {
  alert(`Operasi tidak valid!`);
}
