// console.log("1-------");
// console.log(teddy);
// console.log(sing());
// console.log(sing2);

var teddy = "bear";

// function expression
var sing2 = function () {
  // console.log("uhh la la la");
};

// function declaration
function sing() {
  // console.log("ohh la la la");
}

//* Exercise: Hoisting
var one = 1;
var one = 2;

// console.log(one);

// a();

// function a() {
//   console.log("hi");
// }

// function a() {
//   console.log("bye");
// }

//* Exercise: Hoisting 2
var favouriteFood = "grapes";

var foodThoughts = function () {
  console.log("Original favourite food: " + favouriteFood);

  var favouriteFood = "sushi";

  console.log("New favourite food: " + favouriteFood);
};

// foodThoughts();

//* Exercise 4
function bigBrother() {
  function littleBrother() {
    return "it is me!";
  }
  return littleBrother();

  function littleBrother() {
    return "no me!";
  }
}

// console.log(bigBrother()); // What will be returned here?

//* Function Invocation
// Function Expression
var canada = function () {
  console.log("cold");
};

// Function Declaration
function india() {
  console.log("warm");
}

// Function Invocation/Call/Execution
// canada();
// india();

//* arguments Keyword
function marry(person1, person2) {
  console.log("arguments: ", arguments);
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}

function marry2(...args) {
  console.log("arguments: ", args);
  console.log(Array.from(args));
  return `${args[0]} is now married to ${args[1]}`;
}

// marry("Tim", "Tina");
// marry2("Tim", "Tina");

// Variable Environment
function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true; // local env
  two(); // new execution context is created
}

var isValid = false;
// one();

// two() -- undefined
// one() -- true
// global() -- false

//* Scope Chain
var x = "x";
function findName() {
  console.log(x);
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Eimantas Ulcinas";
}

function sayMyName() {
  var a = "a";
  return findName();
}

// sayMyName();

//* [[scope]]
// Function Lexical Environment === [[scope]]
function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    return function printName() {
      var c = "c";
      console.log(c);
      return "Eimantas Ulcinas";
    };
  };
}

// console.log(sayMyName()()());

// * Exercise: JS is Weird
("use strict");
function weird() {
  var height = 50;
  return height;
}

// console.log(weird());

var heyhey = function doodle() {
  // do something
  doodle();
  return "heyhey";
};

// console.log(heyhey());

// * Function Scope vs Block Scope
// function scope
// vs
// block scope

if (5 > 4) {
  var secret = "12345";
}

// console.log(secret);

// * Exercise: Block Scope
function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final", i);
}

// console.log(loop());

// * IIFE - Immediately Invoked Function Expression
(function () {})();

var script1 = (function () {
  function a() {
    return 5;
  }
  return {
    a: a,
  };
})();

// console.log(script1.a());

// * this Keyword
// Object.someFunc(this)
// console.log(this);

// function a() {
//   console.log(this);
// }

// a();

function b() {
  "use strict";
  console.log(this);
}

// b();

// 1: gives methods access to their object
// 2: execute same code for multiple objects
const obj = {
  name: "Billy",
  sing() {
    return "lalala " + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  },
};

// console.log(obj.sing());
// console.log(obj.singAgain());

function importantPerson() {
  console.log(this.name + "!");
}
const name = "Sunny";
const obj1 = {
  name: "Cassy",
  importantPerson: importantPerson,
};
const obj2 = {
  name: "Jacob",
  importantPerson: importantPerson,
};

// console.log(name);
// importantPerson();
// console.log(obj2.importantPerson());

// * Exercise: Dynamic Scope vs Lexical Scope
const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};

// a();

const obje = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};

// console.log(obje.sing()());

// * call(), apply(), bind()
const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

// console.log("1", archer);
wizard.heal.apply(archer, [50, 30]);
const healArcher = wizard.heal.bind(archer, 50, 30);
// console.log(healArcher());
// console.log("wizards health:", wizard.heal());
// console.log("2", archer);

// * Exercise: call(), apply()

const array = [1, 2, 3];

function getMaxNumber(arr) {
  return arr.reduce((a, b) => Math.max(a, b));
}

getMaxNumber(array); // should return 3
// console.log(getMaxNumber(array));

// * bind() and currying
// function currying
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);

// console.log(multiplyByTwo(4));

let multiplyByTen = multiply.bind(this, 10);

// console.log(multiplyByTen(4));

// * Exercise: this Keyword

var b = {
  name: "jay",
  say() {
    console.log(this);
  },
};
var c = {
  name: "jay",
  say() {
    return function () {
      console.log(this);
    };
  },
};
var d = {
  name: "jay",
  say() {
    return () => console.log(this);
  },
};

// console.log(b.say());
// console.log(c.say()());
// console.log(d.say()());

// * Exercise: this Keyword 2
const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
// console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

// * Context vs Scope
