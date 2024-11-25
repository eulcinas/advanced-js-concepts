//* Higher Order Function

// const hof = () => () => 5;

// console.log(hof());
// console.log(hof()());

const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});

console.log(
  hof(function a(x) {
    return x;
  })
);

//* Closure

const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

console.log(closure());
const incrementFn = closure();
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());

const closure2 = function () {
  let count = 55;
  return function getCounter() {
    return count;
  };
};

const getCounter = closure2();
console.log(getCounter);
console.log(getCounter());
console.log(getCounter());
