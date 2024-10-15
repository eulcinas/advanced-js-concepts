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
    console.log("bye");
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
  return param;
}

a(); // returns a ReferenceError because param is not defined
/* but if
function a(param=6){
return param;
}

a() // returns 6
*/

// * Higher Order Functions
// simple function
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return "Access Granted to Adam";
}
function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return "Access Granted to Eva";
}

letAdamLogin(); // returns 'Access Granted to Adam' but a delay is visible
letEvaLogin(); // returns 'Access Granted to Eva' but a delay is visible
/**
 * Don't forget the DRY method - Do not Repeat Yourself
 */

// function that acceps parameters
const giveAccessTo = (name) => "Access granted to " + name;
function letUserLogin(user) {
  //++ we now tell WHAT DATA to use
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}

function letAdminLogin(admin) {
  let array = [];
  for (let i = 0; i < 5000000; i++) {
    array.push(i);
  }
  return giveAccessTo(admin);
}

letUserLogin("Adam"); // returns 'Access Granted to Adam'
/**
 * We keep our code DRY
 */

//HOF - Higher Order Functions
function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

function sing(person) {
  return "la la la my name is " + person.name;
}

function letPerson(person, fn) {
  // tell it what data to use + function
  if (person.level === "admin") {
    return fn(person);
  } else if (person.level === "user") {
    return fn(person);
  }
  return giveAccessTo(person.name);
}

letPerson({ level: "user", name: "Tim" }, authenticate); // returns 'Access Granted to Sally'
letPerson({ level: "user", name: "Sally" }, sing); // returns 'la la la my name is Sally'
