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

async function a1() {
  console.log("1");
  let r1 = await axios.get("https://www.w3schools.com/angular/customers.php");
  console.log(r1);
  console.log("2");

  let r2 = await axios.get("https://www.w3schools.com/angular/customers.php");
  console.log(r2);
}

a1();
console.log("end");
