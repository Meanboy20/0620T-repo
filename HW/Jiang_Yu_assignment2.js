//Q1
const itemsObject = [
  {
    quantity: 1,
    price: 200,
  },
  {
    quantity: 3,
    price: 350,
  },
  {
    quantity: 5,
    price: 400,
  },
];

// Double quantity and price

const doubleEle = itemsObject.map((ele) => {
  return Object.assign(
    {},
    { quantity: ele.quantity * 2 },
    { price: ele.price * 2 }
  );
});

console.log(JSON.stringify(doubleEle));

console.log("\n");

// Quantity > 2 + price > 300

const filterItem = itemsObject.filter((ele) => {
  return ele.price > 300 && ele.quantity > 2;
});

console.log(JSON.stringify(filterItem));
console.log("\n");

// Calculate total value

const totalValue = itemsObject.reduce((acc, ele) => {
  acc = acc + ele.price;
  return acc;
}, 0);
console.log(totalValue);
console.log("\n");

// Remove extra from string
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const s = string
  .trim()
  .split(/[^A-Za-z]/)
  .filter((ele) => ele !== "")
  .join(" ");

console.log(s);
console.log("\n");

// Meger two array
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "tes3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function mergeArray(array1, array2) {
  const keys = array2.reduce((acc, ele, index) => {
    acc["uuid" + ele.uuid] = index;
    return acc;
  }, {});

  const res = array1.reduce((acc, ele) => {
    if (!("uuid" + ele.uuid in keys)) {
      acc.push(ele);
      return acc;
    } else {
      const curr = array2[keys["uuid" + ele.uuid]];
      acc[keys["uuid" + ele.uuid]] = Object.assign({}, ele, curr);
      return acc;
    }
  }, array2);

  res.map((ele) => {
    ele.role = ele.role === undefined ? null : ele.role;
    ele.name = ele.name === undefined ? null : ele.name;
  });

  const final = res.sort((a, b) => {
    if (a.uuid < b.uuid) {
      return -1;
    }
    if (a.uuid > b.uuid) {
      return 1;
    }
    return 0;
  });

  return final;
}

console.log(
  "Final versioin from function" + JSON.stringify(mergeArray(first, second))
);

// const marrayV2 = first.reduce((acc, ele) => {
//   if (!("uuid" + ele.uuid in secKeys)) {
//     acc.push(ele);
//     return acc;
//   } else {
//     const curr = second[secKeys["uuid" + ele.uuid]];
//     acc[secKeys["uuid" + ele.uuid]] = Object.assign({}, ele, curr);
//     return acc;
//   }
// }, second);

// marrayV2.map((ele) => {
//   ele.role = ele.role === undefined ? null : ele.role;
//   ele.name = ele.name === undefined ? null : ele.name;
// });

// Sort by uuid
// let sortedArray2 = marrayV2.sort((a, b) => {
//   if (a.uuid < b.uuid) {
//     return -1;
//   }
//   if (a.uuid > b.uuid) {
//     return 1;
//   }
//   return 0;
// });

// Combine everything to function