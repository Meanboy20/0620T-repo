setTimeout(function () {
  console.log("timer");
}, 5000);

// y is the call back function
function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

function a() {
  console.log("Print c inside f() a ", c);
  {
    let c = 100;
  }
}

a();
