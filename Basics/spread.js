const obj1 = { name: "Sam", age: 15 };

const obj2 = { name: "Lee" };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
