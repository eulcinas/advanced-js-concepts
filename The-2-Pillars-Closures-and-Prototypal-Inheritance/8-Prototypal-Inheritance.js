const array = [];
array.__proto__;
array.__proto__.__proto__;

function a() {}
a.__proto__;

//* Prototype chain */

let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

dragon.sing();
// console.log(dragon.sing());
dragon.fight();
// console.log(dragon.fight());

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

lizard.__proto__ = dragon;
// lizard.sing();
// console.log(lizard.sing());
// console.log(lizard.fire);
// console.log(dragon.isPrototypeOf(lizard)); // return true
// console.log(lizard.isPrototypeOf(dragon)); // return false

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    // console.log(prop);
  }
}

// * Prototypal Inheritance 5 */

let human = {
  mortal: true,
};

let socrates = Object.create(human);
socrates.age = 45;

// console.log(human.isPrototypeOf(socrates));

// ! Only functions have the prototype property
