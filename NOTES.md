# NOTES

## 2024-09-13

Javascript uses an engine which is like a translator for our computers.
Google wanting to be the best search engine in its field, in 2008 released V8 (written in C++, low-lever language) as a Javascript engine so it could run smooth and fast Javascript scripts. Like Google Maps which uses zoom in, zoom out, street view which requires a lot of resources.

Who created the first Javascript Engine?

- Brendan Eich

The engine works like this:
Javascript file (index.js) -> Parser -> AST (Abstract Syntax Tree) -> Interpreter (Profiler, Compiler) -> Optimized code - > Computer

`Interpreter`
In it we translate and read the files line by line on the fly.

`Compiler`
It works ahead of time to create a translation of what code we just written and it compiles down to usually a language that can be understood by our machines.
Lower level language - machine code

High Level Language - Bytecode - Machine code
(like JavaScript) - like V8 - like x86_64 machine code (handed to CPU), movl rbx, [rax+0x1b], REX.W and so on

There are 2 ways to run Javascript - using Interpreter or a Compiler

`JIT Compiler (Just In Time Compiler)` - is a combination of Interpreter and Compiler

Is Javascript an interpreted language?

- It is true in a way, but it depends on implementation and can be written using a Compiler

## 2024-09-20

`Memory Heap` - a place to store variables into memory with their dedicated info (number, string, object, ect)
`Call Stack` - a reagent in memory which operates in “first in last out” mode. It stores functions and variables as your code executes, at each entry state of the stack, also called the stack frame, allows us to know where we are in the code and it runs in “first in last out” mode.

JavaScript is a single threaded programming language. It means that only one set of instructions is executed at a time.

## 2024-09-24

Example:

console.log(‘1’)
setTimetout(() => {console.log(‘2’), 1000})
console.log(‘3’)

This will always result in 1,3 and 2 because setTimeout() is a WEB API and doesn’t run in JavaScript runtime, so it will be added to callback queue and will only be added to call stack by the event loop once the call stack is done with previous calls

Global Execution Context creates Global Object (window) and `this`

Global Object => this === window

In JavaScript our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope)

## 2024-09-27

In javascript our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope)

`Block scoping` - means declaring a variable not just inside a function but around any curly brackets, like if statements or loops.

`“use strict”` - added to javascript as a way to avoid common mistakes that could happen

`this` - is the object that the function is a property of

`DRY` - DON’T REPEAT YOURSELF

## 2024-10-11

[`JavaScript types`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

undefined - is the abstense of definition
null - is the abstense of value
typeof - is an operator which tells us what type something is

`// Primitive types - it's a data that only represents one value`
number
boolean
string
undefined
null
Symbol()

`// Non-Primitive`
objects {}
arrays []
functions function (){}

- ['JavaScript standart built in objects'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [`structuredClone()`](https://web.dev/articles/structured-clone)

Arrays in JavaScript are objects

Objects in JavaScript are stored in memory and are passed by reference which means we don't copy the values like we did with primitive types.

<mark>Type Coersion</mark>
==[Type Coersion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)==

`Type Coersion` - means the language converting a certain type to another type.

Do all languages have type coersion? Yes, they do. Because we always need to convert types to do different things.

- [ECMAScript Comparison Algorithm](https://262.ecma-international.org/5.1/#sec-11.9.3)
- [JS Comparison table](https://dorey.github.io/JavaScript-Equality-Table/)
- [MDN - Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

Moral of the story:
Always use 3 equals unless you have a good reason to use 2.

`JTS: Dynamic vs Static Typing`
For languages such as JavaScript we have dynamic typing where we can type "var a = 100" and it will assing a value of 100, but for static typed languages like C++ we first have to assign an integer and only then we can give a value to it, like "int a;" "a = 100"

`JTS: Weakly vs Strongly Typed`
JavaScript is dynamically typed language that is weakly typed. It means in JavaScrip we can say "var a = 'boooyaa'" and we can also say "a + 17", output will be "boooyaa17". That is what a weakly typed language does.

Stronlgy typed language will thrown an error saying that you want to add a number to a string.

`JTS: Static Typing In JavaScript`
"Flow" has Babel as a compiler which coverts ES6 and above code into ES5 and below code to be compatible with older browsers.

TypeScript is a superset of JavaScript, which has its own compiler. TypeScript tries to mimic JavaScript.
Angular was developed using TypeScript, so TypeScript is a default in Angular.

## 2024-10-15

### The 2 Pillars: Closures and Prototypal Inheritance

This section will overview what are the 2 most important concepts in JavaScript.
They are quite unique and not available in all languages.
The 2 pillars are:

1. Closures;
2. Prototypal Inheritance;

#### Functions Are Objects

Functions in JavaScript are also Objects.
When we invoke a function we get 2 parameters automatically:

1. "this" keyword
2. "arguments" keyword - arguments is an array like object that has some weird behaviours for looping and iteration.
   So we want to avoid using it and instead use something like the "spread opperator".

#### First Class Citizens

Functions are first class citizens in JS, it means 3 things:

1. Functions can be assigned to variables and properties of objects
2. Pass functions as arguments into a function
3. We can return function as values from another functions

#### Extra Bits: Functions

#### Higher Order Functions

Higher Order Function - is simply a function that can take a function into an argument or a function that returns another function.

## 2024-10-22

#### Closures

`Closures` - is one of the 1st pillars of JavaScript. Closure is a combination of functions and Lexical scope.

```
function sayMyName(){
   let a = 'a';
   return function findName(){
      let b='b';
      return function printName(){
         let c='c';
         return 'Eimantas Ulcinas'
      }
   }
}
```

Lexical Environment === [[scope]]

Functions is a first class citizen

`Closure in JavaScript`
A closure is a feature in JavaScript that allows a function to access variables from its outer (lexical) environment even after the outer function has finished executing. In simpler terms, a closure is created when an inner function "remembers" and can still access variables from its outer function, even after the outer function has returned.

`Key Concepts of Closure:`

1. Functions can be returned and still access outer variables: When you return a function from another function, the returned function still has access to the variables declared in the outer function.

2. Lexical scoping: In JavaScript, the scope of a variable is determined by its position in the source code (lexical environment). Closures are tightly linked to lexical scoping, meaning that a function can access variables defined outside of it, within its lexical scope.

3. Persistence of state: Closures are powerful because they allow functions to "remember" the state of variables in their outer scope, which would otherwise be lost when the outer function finishes executing.

`Example of Closure:`

```
function outer() {
  let count = 0; // Local variable in the outer function

  function inner() {
    count++; // Inner function accessing and modifying the outer variable
    console.log(count);
  }

  return inner; // Returning the inner function
}

const increment = outer(); // outer() has finished executing, but the inner function is now assigned to 'increment'
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
```

`Important Parts of a Closure:`

1. Outer Function (Enclosing Function): This is the function that creates the environment where some variables live. These variables can be accessed by the inner function. In the above example, outer() is the outer function.

2. Inner Function (Closure): The function that "closes over" (captures) the outer function’s variables. In the example, the inner function forms the closure by accessing and modifying the count variable defined in outer.

3. Preservation of the Lexical Environment: Even though the outer function finishes its execution, its variables (like count) are preserved within the inner function, allowing it to still access and modify count. This is what creates a closure.

4. Encapsulation: Closures are often used to create private variables. The count variable in the example above is essentially "private" because it can only be accessed and modified through the inner function. This allows you to manage state in a controlled way.

`Practical Use Cases for Closures:`

1. Data Privacy: Closures can help hide variables from the global scope, acting as a form of data encapsulation. For example, in JavaScript modules or factory functions, closures are used to create private variables.

2. Function Factories: Closures are used to create functions that share the same outer environment but produce different behaviors.

```
function makeMultiplier(multiplier) {
return function(num) {
return num \* multiplier; // Inner function has access to 'multiplier'
};
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

3. Callback Functions: In asynchronous programming, closures are useful because they allow access to variables even after the outer function has completed.

```
function delayLog(message, delay) {
setTimeout(function() {
console.log(message); // The inner function (callback) "remembers" the message variable
}, delay);
}

delayLog("Hello after 2 seconds", 2000); // Logs "Hello after 2 seconds" after 2 seconds
```

`Summary of Key Points:`

- A closure is when a function "remembers" and can access variables from its outer lexical environment, even after the outer function has finished executing.
- Closures rely on lexical scoping and allow functions to persist variables across calls.
- Common use cases include private variables, function factories, and asynchronous callbacks.

Understanding closures is essential in JavaScript because it underpins how variables and functions interact, especially in advanced functional programming patterns.

## 2024-11-14

#### Prototypes

`Constructor functions` - they usually start with a capital letter, and they contain the actual blueprint (prototype) that we actually use.

In JavaScript, prototypes provide a way for objects to inherit properties and methods from other objects. This is the core of JavaScript's inheritance model, known as prototypal inheritance.

Key Concepts of Prototypes
Prototype Property: Every JavaScript object has a hidden property called [[Prototype]] that either points to another object or is null. When you access a property on an object, JavaScript will first check the object itself; if the property isn’t found, it will look at the object’s prototype, then its prototype’s prototype, and so on, up the chain, until it reaches an object with a null prototype.

Prototype Chain: The chain of objects linked by the [[Prototype]] property is called the prototype chain. This chain enables inheritance of properties and methods. If a property or method isn’t found on the current object, JavaScript traverses up the prototype chain until it either finds it or reaches the end of the chain (null).

Object.prototype: Almost all objects in JavaScript are ultimately linked to Object.prototype, which is at the top of the prototype chain. This is why all objects inherit basic methods like .toString() and .hasOwnProperty() from Object.prototype.

Creating and Using Prototypes
In JavaScript, prototypes are usually involved when working with constructor functions or classes:

Constructor Functions
Constructor functions are regular functions used with the new keyword to create instances. When you use a constructor function, JavaScript sets up the instance’s prototype to reference the constructor’s prototype property.

js
Copy code
function Person(name, age) {
this.name = name;
this.age = age;
}

Person.prototype.sayHello = function() {
console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.sayHello(); // Output: Hello, my name is Alice
person2.sayHello(); // Output: Hello, my name is Bob
In this example:

Person.prototype contains the shared method sayHello.
Both person1 and person2 instances inherit from Person.prototype, so they can access sayHello without storing it directly on each instance, conserving memory.
Classes and class Syntax
JavaScript's class syntax is essentially syntactic sugar over prototypes. It provides a cleaner, more familiar syntax for defining prototypes and inheritance.

js
Copy code
class Animal {
constructor(name) {
this.name = name;
}

speak() {
console.log(this.name + " makes a noise.");
}
}

class Dog extends Animal {
speak() {
console.log(this.name + " barks.");
}
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.
Here:

Dog inherits from Animal, which means Dog’s prototype chain includes Animal.prototype.
The dog instance can call methods defined on Animal, like speak.
Important Parts of Prototypes
prototype Property on Functions: Every function in JavaScript has a prototype property, which is an object. This property is what instances created by that function’s constructor inherit from.

js
Copy code
function Car(make) {
this.make = make;
}

console.log(Car.prototype); // Car.prototype is an object
**proto** (Dunder Proto) / [[Prototype]]: This property (often accessed via **proto**) is present on each object and points to its prototype. This is how an object links up the prototype chain.

js
Copy code
const car = new Car("Toyota");
console.log(car.**proto** === Car.prototype); // true
Shared Methods and Properties: Methods and properties on the prototype are shared across all instances of the constructor, which conserves memory. Rather than each object having its own copy of a method, they all reference the method on the prototype.

Overriding Prototyped Properties: You can override properties or methods from the prototype on an individual instance, allowing instance-specific behavior. If a property is found directly on an instance, it won’t look up the prototype chain.

js
Copy code
car.make = "Honda"; // Overrides the `make` property for this instance only
Checking for Properties (hasOwnProperty): The hasOwnProperty method checks whether a property exists directly on an object, without traversing up the prototype chain. This is useful for distinguishing between instance properties and inherited properties.

js
Copy code
console.log(car.hasOwnProperty("make")); // true
console.log(car.hasOwnProperty("toString")); // false, since `toString` is from `Object.prototype`
Why Prototypes Are Important
Memory Efficiency: Since properties and methods defined on the prototype are shared, they conserve memory by preventing the need for duplicate copies on each instance.
Inheritance: Prototypes enable inheritance in JavaScript, allowing objects to inherit properties and methods from other objects.
Dynamic Behavior: You can add properties to prototypes even after creating instances. All instances automatically gain access to newly added properties or methods.
Summary of Key Points
Prototype: An object that other objects inherit properties and methods from.
Prototype Chain: The chain of prototypes that JavaScript follows when looking for a property or method.
prototype Property: Exists on constructor functions and is used as the blueprint for instances created with new.
**proto** or [[Prototype]]: Exists on every object and points to its prototype.
Prototypes are foundational for understanding inheritance and memory efficiency in JavaScript, making them essential for mastering JavaScript's object-oriented concepts.

## 2024-11-18

### Object Oriented Programming and Functional Programming

- Clear + Understandable
- Easy to Extend
- Easy to Maintain
- Memory Efficient
- DRY

`Java` and `Scheme` were the inspration for `JavaScript`

- Regular function() is dynamically scoped;
- Arrow function ()=>{} is lexically scoped;

If someone asks if JavaScript has classes, we can say that technically they do, but it's sintactic sugar. The `class` keyword is still prototypal inheritance.

#### 4 pillars of OOP

1. Encapsulation;
2. Abstraction;
3. Inheritance;
4. Polymorphism;

#### Functional Programming

Functional programming has this one pillar which is very important - `Pure Functions`

When it comes to Pure Functions there's 2 main things:

1. A function must return the same output given the same input
2. The function can not modify anything outside of itself, no side effects.

##### The Perfect Function

1. A perfect functoin should do 1 task and 1 task only
2. It should have a return statement
3. Every function should be Pure
4. No shared state
5. Immutable state
6. They should be Composable
7. We want to make them predictable

The idea of "Idempotence" is a function that always returns or does what we expect it to do.

Partial Application expects on the second call to have all the arguments.
Currying expects one argument at a time.

Caching - is a way to store vales so we could use them later on. Ideally you can thing of caching as a bagpack that you take to school.

##### Composing

Composition - is the idea that any sort of data transformation that we do should be obvious.

#### Asynchronous JavaScript

##### Promises

Promise - is an object that may produce a single value some time in the future. Either a resolved value, or a reson that that it's not resolved (rejected).

A Promise may be in one of 3 possible states:

1. Fullfiled
2. Rejected
3. Pending

#### Modules in JavaScript
