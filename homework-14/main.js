const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
const newUsers = [
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
];
users.push(...newUsers);
console.log(users);

function getUserAverageAge(users) {
  if (!users || users.length === 0) {
    return 0;
  }
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / users.length;
  return averageAge;
}
const average = getUserAverageAge(users);
console.log("Средний возраст:", average);

function getAllAdmins(users) {
  return users.filter(user => user.isAdmin === true);
}

const admins = getAllAdmins(users);
console.log("Администраторы:", admins);

function first(arr, n) {
  if (n === undefined) {
    return arr.slice(0, 1);
  }
  if (n === 0) {
    return [];
  }
  return arr.slice(0, n);
}

console.log("first(users, 2):", first(users, 2));
console.log("first(users, 0):", first(users, 0));
console.log("first(users, undefined):", first(users, undefined));
console.log("first(users, 10):", first(users, 10));
