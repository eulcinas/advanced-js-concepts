// Exercise - extend the functionality of a built in object

// #1
// Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
new Date("1900-10-10").lastYear();
console.log(new Date("1988-10-10").lastYear());
console.log(new Date().lastYear());
// '1899'

// * some examples
// new Date("1990-10-10").getFullYear();
// console.log(new Date("1990-10-10").getFullYear());
// console.log(new Date("1990-10-10").getDay());

// #Bonus
// Modify .map() to print 'map' at the end of each item.

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "map");
  }
  return arr;
};

console.log([1, 2, 3].map());
// 1map, 2map, 3map

// ? Exercise: Prototypal Inheritance with this

Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};
