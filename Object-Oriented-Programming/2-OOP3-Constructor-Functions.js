//* Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  // console.log("this", this);
}

Elf.prototype.attack = function () {
  return "attack with " + this.weapon;
};

// Elf.prototype.build = function () {
//   const self = this;
//   function building() {
//     return self.name + " builds a house";
//   }
//   return building();
// };

const peter = new Elf("Peter", "stones");
console.log(peter.attack());
// console.log(peter.build());
const sam = new Elf("Sam", "fire");
console.log(sam.attack());

// const Elf1 = new Function(
//   "name",
//   "weapon",
//   `this.name = name;
//   this.weapon = weapon;`
// );

// const sarah = new Elf1("Sarah", " fireworks");
// console.log(sarah);
