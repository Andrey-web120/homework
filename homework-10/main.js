const number = +prompt("Введите число");
if (number % 2 === 0) {
  console.log("Число делится на два");
} else {
  console.log("Число не делится два");
}
let age = +prompt("Введите возраст");
let discount = 0;

switch (true) {
  case age < 18:
    discount = 10;
    break;

  case age >= 18 && age <= 65:
    discount = 20;
    break;
  case age > 65:
    discount = 30;
    break;
  default:
    discount = 0;
    break;
}
console.log("Возраст:", age);
console.log("Скидка:", discount);
let username;
let password;
username = prompt("Введите имя пользователя (admin или user):");
password = prompt("Введите пароль:");
if ((username === "admin" || username === "user") && password === "123456") {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}
