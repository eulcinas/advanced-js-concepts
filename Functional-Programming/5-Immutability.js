// Immutability - not changing the data, not changing the state

const obj = { name: "Eimantas" };

function clone(obj) {
  return { ...obj }; // this is pure
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}

console.log(obj);
console.log(updateName(obj));

const updatedObj = updateName(obj);
console.log(obj, updatedObj);
