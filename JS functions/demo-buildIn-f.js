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

// Filter names with age less than 30

const ageGroup = user.filter((x) => x.age < 34).map((cur) => cur.firstName);

console.log(ageGroup);

// Use reducer to get names

const youngPlayer = user.reduce((pre, cur) => {
  cur.age < 30 ? pre.push(cur.firstName) : null;
  return pre;
}, []);

console.log(youngPlayer);

const test = user.map((x) => (x.age < 30 ? x.firstName : null));
console.log(test);

const array = [
  { firstName: "Curry", title: "The captain" },
  { fistName: "", title: "" },
  { firstName: "", title: "" },
];

const item = array[0].firstName;
console.log(item);
