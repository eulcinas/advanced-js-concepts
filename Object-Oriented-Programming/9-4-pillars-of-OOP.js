class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack(cry) {
    return "attack with " + cry;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  attack() {
    return "arghhh";
  }
  makeFort() {
    return "Stronges fort in the world made";
  }
}

const dobby = new Elf("Dobby", "cloth", "house");
const shrek = new Ogre("Shrek", "club", "green");

console.log(dobby.attack("weee"));
console.log(shrek.attack());
