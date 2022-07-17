for (var i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("after", i, " seconds" + i);
  }, i * 1000);
}

//IIFE

for (var i = 0; i <= 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("after", i, " seconds " + i);
    }, i * 1000);
  })(i);
}

// lexical scope
for (let i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log("after", i, " seconds" + i);
  }, i * 1000);
}

function sum(a, b) {
  return a + b;
}

function sum(a, b) {
  return a + b;
}

function sumIIFE(a) {
  return function sum(b) {
    return a + b;
  };
}

console.log(sum(2, 3));
console.log(sumIIFE(2)(3));

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

const sumTest = (...rest) => {
  if (rest.length === 2) {
    return rest[0] + rest[1];
  }
  return (second) => rest[0] + second;
};

console.log(sumTest(1)(2));
