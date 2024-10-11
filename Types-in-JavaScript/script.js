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
// Pass by value
var a = 5;
var b = a; // copies the value of "a", not the variable itself
b++;
// console.log(a);
// console.log(b);

// Pass by reference
let obj2 = {
  name: "Yao",
  password: "123",
};
let obj3 = obj2; // by doing this we simply said this is where the object is in memeory

obj3.password = "easypeasy"; // this means that we are changing the password value in memory, where obj2 is also referencing. That's where Pass By Reference comes from

// console.log(obj2);
// console.log(obj3);

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
let superClone = JSON.parse(JSON.stringify(obj4)); // deep cloning where it clones all layers

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
// console.log({ structuredCloned });

// * Type Coercion

1 == "1"; // this will result in "true", if it is of a different type it will convert to another type (1==1)
// In JavaScript it happens when you use double equal sing (==) it means compare the two values and if they have different types try to coer to a single type.
// If we do three equals (===) it will give us a "false" because it compares two values but doesn't try to coer these values.

if (1) {
  // console.log(5);
}

-0 === +0; // this returns true
Object.is(-0, +0); // this returns false

NaN === NaN; // returns false
Object.is(NaN, NaN); // returns true

// * Exercise: Type Coercion
false == ""; // true
false == []; // true
false == {}; // false
"" == 0; // true
"" == []; // true
"" == {}; // false
0 == []; // true
0 == {}; // false
0 == null; // false

// * JTS: Dynamic vs Static Typing

function sum(a: number, b: number) {
  return a + b;
}
// this prevents future developers to not make such mistakes as using the sum function with wrong values, like sum('hello', null)

// * JTS: Weakly vs Strongly Typed
var a = "boooyaa";
a + 17; // output will be "boooyaa17"
