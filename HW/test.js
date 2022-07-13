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
