// * Functions Are Objects
function one() {
  return 1;
}

one(); // a way to invoke a function and returns 1

// Another way of invoking a function is through a method:
// const obj = {
//   two: function () {
//     return 2;
//   },
// };
const obj = {
  two() {
    return 2;
  },
};

obj.two(); // runs the function and returns 2

function three() {
  return 3;
}

three.call(); // returns 3

const four = new Function("return 4");
// const four = new Function("num", "return num");

four(); // returns 4
// four(4); // returns 4

// * First Class Citizens
// Functions are first class citizens in JS, it means 3 things:
//1
var stuff = function () {};
//2
function a(fn) {
  fn();
}

a(function () {
  console.log("hi there");
});

//3
function b() {
  return function c() {
    // console.log("bye");
  };
}

b(); // returns function c()
b()(); // returns 'bye'
var d = b();
d();

// * Extra Bits: Functions
// every time we loop over here and initialise and invoke the function until i becomes 5
for (let i = 0; i < 5; i++) {
  function a() {}
}

function a() {
  // return param;
}

a(); // returns a ReferenceError because param is not defined
/* but if
function a(param=6){
return param;
}

a() // returns 6
*/

// * Exercise: Higher Order Functions
