//  Currying

const multiply = (a, b) => a * b;

console.log(multiply(3, 4));

const curriedMultiply = (a) => (b) => a * b;

console.log(curriedMultiply(5)(3));

const curriedMultiplyBy5 = curriedMultiply(5);

// 10 years
console.log(curriedMultiplyBy5(4));
