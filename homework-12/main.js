function calculateFinalPrice(basePrice, discountPercentage, taxRate) {
  const discountAmount = basePrice * (discountPercentage / 100);
  const priceAfterDiscount = basePrice - discountAmount;
  const taxAmount = priceAfterDiscount * taxRate;
  const finalPrice = priceAfterDiscount + taxAmount;
  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));
console.log(calculateFinalPrice(500, 20, 0.15));

function checkAccess(username, password) {
  const requiredUsername = "admin";
  const requiredPassword = "123456";

  if (username === requiredUsername && password === requiredPassword) {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}
console.log(checkAccess("admin", "123456"));
console.log(checkAccess("user1", "123456"));
console.log(checkAccess("admin", "111111"));

function getTimeOfDay(hour) {
  if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
    return "Некорректное время";
  }

  if (hour >= 0 && hour <= 5) {
    return "Ночь";
  } else if (hour >= 6 && hour <= 11) {
    return "Утро";
  } else if (hour >= 12 && hour <= 17) {
    return "День";
  } else {
    return "Вечер";
  }
}
console.log(`Час 2: ${getTimeOfDay(2)}`);
console.log(`Час 7: ${getTimeOfDay(7)}`);
console.log(`Час 0: ${getTimeOfDay(0)}`);
console.log(`Час 23: ${getTimeOfDay(23)}`);
console.log(`Час 24: ${getTimeOfDay(24)}`);
console.log(`Час -1: ${getTimeOfDay(-1)}`);

function findFirstEven(start, end) {
  let position = 1;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return position;
    }
    position++;
  }
  return "Чётных чисел нет";
}
console.log(`findFirstEven(1, 10): ${findFirstEven(1, 10)}`);
console.log(`findFirstEven(9, 9): ${findFirstEven(9, 9)}`);
console.log(`findFirstEven(12, 15): ${findFirstEven(12, 15)}`);
console.log(`findFirstEven(14, 16): ${findFirstEven(14, 16)}`);
