class Character {
  #age = 54;
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  // 'private' is only available in TypeScript
  attack() {
    return "attack with " + this.age;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return "Stronges fort in the world made";
  }
}
// Ogre.prototype.makeFort();

const dobby = new Elf("Dobby", "cloth", "house");
console.log(dobby);
console.log(dobby.attack());
const shrek = new Ogre("Shrek", "club", "green");
console.log(shrek);
console.log(shrek.makeFort());
