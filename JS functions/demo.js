const arr = [5, 1, 19, 3, 6, 10];

const user = [
  { firstName: "Musk", lastName: "Elon", age: 53 },
  { firstName: "Stephen", lastName: "Curry", age: 34 },
  { firstName: "Jason", lastName: "Tatum", age: 24 },
  { firstName: "Klay", lastName: "Thopmson", age: 34 },
  { firstName: "Looney", lastName: "Kevon", age: 34 },
];

// Map
const output = arr.map((x) => {
  return x.toString(2);
});

console.log(output);

// Filter

const filterOutput = arr.filter((x) => x % 2 === 0);

console.log(filterOutput);

// Reduce

const reduceOutput = arr.reduce((pre, curr) => {
  return (pre = pre + curr);
});

console.log(reduceOutput);

// Use reduce to find max

const resMax = arr.reduce((max, curr) => {
  return max >= curr ? max : curr;
}, 3);

console.log(resMax);

// Count the number of user with certain age

const countAge = user.reduce((pre, curr) => {
  pre[curr.age] ? ++pre[curr.age] : (pre[curr.age] = 1);
  return pre;
}, {});

console.log(countAge);
