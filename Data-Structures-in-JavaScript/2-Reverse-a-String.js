// Create a function that reverses a string:
// 'Hi My name is Eimantas' should be:
// 'satnamiE si eman yM iH'

let string = "Hi My name is Eimantas";

// 1 Reverse a String using Built-In Functions
function reverse(str) {
  const splitString = str.split("");

  const reverseArray = splitString.reverse();

  const joinArray = reverseArray.join("");

  return joinArray;
}

reverse(string);
console.log("Using build in functions:", reverse(string));

// Chaining these three methods together
function reverseChain(str) {
  return str.split("").reverse().join("");
}

console.log("Chaining built-in functions:", reverseChain(string));

// 2 Reverse a String with a Decrementing For Loop
function reverse2(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

console.log("Using a Decrementing For Loop:", reverse2(string));

// 3 Reverse a String with Recursion
function reverse3(str) {
  if (str === "") {
    return "";
  } else {
    return reverse3(str.substr(1)) + str.charAt(0);
  }
}

console.log("Using Recursion:", reverse3(string));

// Conditional (Ternary) Operator:
function ternaryReverse(str) {
  return str === "" ? "" : ternaryReverse(str.substr(1)) + str.charAt(0);
}

console.log("Using Conditional (Ternary) Operator:", ternaryReverse(string));

// ! Solution from video course
function reverseCourse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);

  return backwards.join("");
}

function reverseCourse2(str) {
  return str.split("").reverse().join("");
}

const reverseCourse3 = (str) => str.split("").reverse().join("");

const reverseCourse4 = (str) => [...str].reverse().join("");

console.log("Using reverseCourse solution:", reverseCourse(string));
console.log("Using reverseCourse2 solution:", reverseCourse2(string));
console.log("Using reverseCourse3 solution:", reverseCourse3(string));
console.log("Using reverseCourse4 solution:", reverseCourse4(string));
