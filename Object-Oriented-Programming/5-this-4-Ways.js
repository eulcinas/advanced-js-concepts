// * this

// * new binding this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Xavier", 55);
console.log(person1);

// * implicit binding
const person = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("hi " + this.name);
  },
};

console.log(person);

// * explicit binding
const person3 = {
  name: "Sally",
  age: 40,
  hi: function () {
    console.log("Hi " + this.setTimeout);
  }.bind(window),
};

console.log(person3.hi());

// * arrow function
const person4 = {
  name: "Tobias",
  age: 40,
  hi: function () {
    var inner = () => {
      console.log("hi " + this.name);
    };
    return inner();
  },
};

console.log(person4.hi());
