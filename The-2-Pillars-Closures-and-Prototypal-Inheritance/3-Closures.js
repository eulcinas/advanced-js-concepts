console.log("This is the part to Closures");

function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

console.log(a());
/**
 * returns
 * ƒ b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  }
 */
console.log(a()());
/**
 * returns
 * ƒ c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    }
 */
console.log(a()()());
/**
 * returns grandpa > father > son
 */

// function boo(string) {
//   return function (name) {
//     return function (name2) {
//       console.log(`${string} ${name} ${name2}`);
//     };
//   };
// }

const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`);

console.log(boo("hi"));
/** returns (name) => (name2) => console.log(`${string} ${name} ${name2}`) */
console.log(boo("hi")("tim"));
/** returns  (name2) => console.log(`${string} ${name} ${name2}`)*/
console.log(boo("hi")("tim")("becca"));
/** returns hi tim becca */

const booString = boo("hi");
// 5 years in memory
const booStringName = booString();
