//? no side effects

const array = [1, 2, 3];

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyByTwo(arr) {
  return arr.map((item) => item * 2);
}
const array2 = removeLastItem(array);
const array3 = multiplyByTwo(array);

// console.log(array, array2, array3);

//? input --> output

function a(num1, num2) {
  return num1 + num2;
}

console.log(a(3, 4));

function b(num) {
  return num * 2;
}

console.log(b(a(3, 4)));
