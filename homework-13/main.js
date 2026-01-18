const person = {
  firstName: "Андрей",
  lastName: "Пепел",
  age: 16,
  city: "Донецк",
  isStudent: true,
};
console.log("--- Задача 1: Свойства объекта person ---");
console.log(`Имя: ${person.firstName}`);
console.log(`Фамилия: ${person.lastName}`);
console.log(`Возраст: ${person.age}`);
console.log(`Город: ${person.city}`);
console.log(`Студент: ${person.isStudent}`);

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log("\n--- Задача 2: Проверка на пустоту ---");
const emptyObj = {};
const filledObj = { a: 1 };

console.log(`Объект {} пуст? ${isEmpty(emptyObj)}`);
console.log(`Объект {a: 1} пуст? ${isEmpty(filledObj)}`);

const task = {
  title: "Изучить объекты",
  description: "Пройти задачи по JS",
  isCompleted: false,
  priority: "High",
};

function cloneAndModify(object, modifications) {
  const newObject = { ...object, ...modifications };
  console.log("\n--- Задача 3: Клонирование и модификация ---");
  console.log("Свойства клонированного и модифицированного объекта:");
  for (const key in newObject) {
    if (Object.hasOwnProperty.call(newObject, key)) {
      console.log(`${key}: ${newObject[key]}`);
    }
  }
  return newObject;
}
const modifications = {
  isCompleted: true,
  dueDate: "2024-12-31",
};
const modifiedTask = cloneAndModify(task, modifications);
console.log("\nПроверка: Исходный объект isCompleted:", task.isCompleted);

function callAllMethods(obj) {
  console.log("\n--- Задача 4: Вызов всех методов ---");
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (typeof value === "function") {
        value();
      }
    }
  }
}
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
  anotherMethod: () => {
    console.log("Метод 2 (стрелочная функция) вызван");
  },
};
callAllMethods(myObject);
