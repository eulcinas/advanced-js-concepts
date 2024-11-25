// no side effects

// input --> output

const array = [1, 2, 3];

function mutateArray(arr) {
  arr.pop();
}

function mutateArray2(arr) {
  arr.forEach((item) => {
    arr.push(1);
  });
}

console.log(mutateArray(array));
console.log(mutateArray2(array));
console.log(array);
