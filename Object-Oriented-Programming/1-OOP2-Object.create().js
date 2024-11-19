//* Object.create()
const elfFunctions = {
  attack() {
    return "attacks with " + this.weapon;
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const peter = createElf("Peter", "stones");
console.log(peter.attack());

const sam = createElf("Sam", "fire");
console.log(sam.attack());
