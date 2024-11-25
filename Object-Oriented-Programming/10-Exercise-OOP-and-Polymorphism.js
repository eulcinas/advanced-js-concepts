class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

class Queen extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack() {
    console.log(super.attack());
    return `I am the ${this.name} of ${this.type}, now bow down to me!`;
  }
}

const victoria = new Queen("Victoria", "army", "hearts");
// victoria.attack();
console.log(victoria.attack());
