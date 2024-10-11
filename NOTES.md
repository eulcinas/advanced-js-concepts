# NOTES

### 2024-09-13

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

### 2024-09-20

`Memory Heap` - a place to store variables into memory with their dedicated info (number, string, object, ect)
`Call Stack` - a reagent in memory which operates in “first in last out” mode. It stores functions and variables as your code executes, at each entry state of the stack, also called the stack frame, allows us to know where we are in the code and it runs in “first in last out” mode.

JavaScript is a single threaded programming language. It means that only one set of instructions is executed at a time.

### 2024-09-24

Example:

console.log(‘1’)
setTimetout(() => {console.log(‘2’), 1000})
console.log(‘3’)

This will always result in 1,3 and 2 because setTimeout() is a WEB API and doesn’t run in JavaScript runtime, so it will be added to callback queue and will only be added to call stack by the event loop once the call stack is done with previous calls

Global Execution Context creates Global Object (window) and `this`

Global Object => this === window

In JavaScript our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope)

### 2024-09-27

In javascript our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope)

`Block scoping` - means declaring a variable not just inside a function but around any curly brackets, like if statements or loops.

`“use strict”` - added to javascript as a way to avoid common mistakes that could happen

`this` - is the object that the function is a property of

`DRY` - DON’T REPEAT YOURSELF

### 2024-10-11

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
