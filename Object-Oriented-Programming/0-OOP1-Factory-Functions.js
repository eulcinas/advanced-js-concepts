// const elf = {
//   name: "Orwell",
//   weapon: "bow",
//   attack() {
//     return "attack with " + elf.weapon;
//   },
// };

// const elf2 = {
//   name: "Sally",
//   weapon: "bow",
//   attack() {
//     return "attack with " + elf.weapon;
//   },
// };

// console.log(elf.attack());
// console.log(elf2.attack());

//* factory functions
const elfFunctions = {
  attack() {
    return "attacks with " + this.weapon;
  },
};

function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "attack with " + weapon;
    },
  };
}

const peter = createElf("Peter", "stones");
console.log(peter.attack());

const sam = createElf("Sam", "fire");
console.log(sam.attack());
