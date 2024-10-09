let operasi = prompt(
  `Pilih operasi: 
  \n 1. Luas Segitiga \n 2. Keliling Lingkaran \n 3. Bilangan Prima \n`,
  "1"
);

let hasil;

let luas = (a, b) => {
  hasil = (1 / 2) * a * b;
  return hasil;
};

let keliling = (a) => {
  if (a % 7 == 0) {
    hasil = ((2 * 22) / 7) * a;
  } else {
    hasil = 2 * 3.14 * a;
  }
  return hasil;
};

let prima = (a) => {
  if (a < 2) {
    return false;
  } else if (a == 2 || a == 3) {
    return true;
  } else if (a % 2 == 0 || a % 3 == 0) {
    return false;
  } else {
    return true;
  }
};

if (operasi == "1") {
  let a = Number(prompt("Masukkan nilai alas :", 0));
  let b = Number(prompt("Masukkan nilai tinggi :", 0));
  alert(`Luas segitiga dengan alas ${a} dan tinggi ${b} = ${luas(a, b)}.`);
} else if (operasi == "2") {
  let a = Number(prompt("Masukkan nilai jari-jari :", 0));
  alert(`Keliling lingkaran dengan jari-jari ${a} = ${keliling(a)}.`);
} else if (operasi == "3") {
  let a = Number(prompt("Masukkan bilangan :", 0));
  if (prima(a)) {
    alert(`${a} merupakan bilangan prima.`);
  } else {
    alert(`${a} bukan bilangan prima.`);
  }
} else {
  alert(`Operasi tidak valid!`);
}
