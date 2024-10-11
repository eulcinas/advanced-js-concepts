// * Javascript Types
5; // number
true; // boolean
("to be or not to be"); // string
undefined; // undefined
null; // null
Symbol("just me"); // Symbol('just me')
{
} // objects

// Primitive
// It's a data that only represents one value
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof "to be or not to be");
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof Symbol("just me"));

// Non-Primitive
// Doesn't contain the actual value in memory
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function () {});

const obj1 = {
  a: "Tom", // reference somewhere in memory
};

// Arrays and functions are objects

function a() {
  return 5;
}
a.hi = "hihihi";
// console.log(a);
// console.log(a.hi);

// * Array.isArray()
var array = [1, 2, 3];

var array = {
  0: 1,
  1: 2,
  2: 3,
};

Array.isArray([1, 2, 3]);
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray({}));

//! Arrays in JavaScript are objects

// * Pass By Value vs Pass By Reference
var a = 5;
var b = a;
b++;
// console.log(a);
// console.log(b);

let obj2 = {
  name: "Yao",
  password: "123",
};
let obj3 = obj2;

obj3.password = "easypeasy";

console.log(obj2);
console.log(obj3);

var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(981723987);

// console.log(d);
// console.log(c);

let obj4 = {
  a: "a",
  b: "b",
  c: { deep: "try and copy me" },
};
let clone = Object.assign({}, obj4);
let clone2 = { ...obj4 }; // shallow cloning where we can clone the 1st layer
let superClone = JSON.parse(JSON.stringify(obj4));

// obj4.c = 5;
obj4.c.deep = "hahah";

// console.log(obj4);
// console.log(clone);
// console.log(clone2);
console.log({ superClone });

// * Exercise: Compare Objects
var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
// var eq = user1 == user2;
var eq = JSON.stringify(user1) == JSON.stringify(user2);
// alert(eq);

// * Exercise: Pass By Reference
const number = 100;
const string = "Jay";
let obj5 = {
  value: "a",
};
let obj6 = {
  value: "b",
};
let obj7 = obj6;

function change(number, string, obj5, obj6) {
  number = number * 10;
  string = "Pete";
  obj5 = obj6;
  obj6.value = "c";
}

change(number, string, obj5, obj6);

//Guess the outputs here before you run the code:
// console.log(number);
// console.log(string);
// console.log(obj5.value);

// * structuredClone
// https://web.dev/articles/structured-clone
let structuredCloned = structuredClone(obj4);
console.log({ structuredCloned });
