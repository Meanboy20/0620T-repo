const obj = {
  name: "Jim",
  age: 40,
};

obj["gender"] = "male";

console.log(obj["gender"]);

const array = [1, 2, 3, 4, 5];

const res = array.map((ele) => {
  ele = ele * 2;
  return ele;
});

console.log(array);

console.log(res);

console.log(Object.assign({}, { name: "Jim" }, { age: null }));

const obj1 = [{ name: "Jim" }];

const obj2 = obj1;

const obj3 = [...obj1];

console.log(obj1 === obj2);

console.log(obj1 === obj3);

console.log(obj1[0] === obj3[0]);

console.log(obj3[0]);

obj3[0].name = "Jack";
console.log(obj1[0]);

// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore = [...numberStore, newNumber];

// console.log(numberStore);

{
}
