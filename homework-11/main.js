const number = 1;
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

let n = +prompt("Введите число");
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`Факториал числа ${n} равен: ${factorial}`);

let board = 8;
const row_1 = " Ч";
const row_2 = " Б";

for (let i = 1; i <= board; i++) {
  let row = "";
  for (let j = 1; j <= board; j++) {
    if ((i + j) % 2 === 0) {
      row += row_1;
    } else {
      row += row_2;
    }
  }
  console.log(row);
}
