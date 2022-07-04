// typical fetch
// fetch()
//   .then((res) => res.json())
//   .then((data) => {
//     return { data: data, status: res.status };
//   })
//   .then((res) => console.log(res.data, res.status));

function test(x) {
  let a = x * x;
  return a;
}

const b = test(2);
console.log(b);
