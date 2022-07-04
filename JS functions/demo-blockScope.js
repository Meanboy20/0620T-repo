//Inside the block

const a = 10;
const b = 100;
var c = 1000;

{
  console.log(a);
  const b = 10;
  {
    //Inside the block, look for the cloest b assignment
    console.log(b);
  }
}

var c = 900;
console.log(90);
console.log(c);
