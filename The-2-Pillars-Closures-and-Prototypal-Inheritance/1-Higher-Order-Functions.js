// * Higher Order Functions
// simple function
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return "Access Granted to Adam";
}
function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return "Access Granted to Eva";
}

letAdamLogin(); // returns 'Access Granted to Adam' but a delay is visible
letEvaLogin(); // returns 'Access Granted to Eva' but a delay is visible
/**
 * Don't forget the DRY method - Do not Repeat Yourself
 */

// function that acceps parameters
// function letUserLogin(user) {
//   //++ we now tell WHAT DATA to use
//   let array = [];
//   for (let i = 0; i < 1000000; i++) {
//     array.push(i);
//   }
//   return giveAccessTo(user);
// }

function letAdminLogin(admin) {
  let array = [];
  for (let i = 0; i < 5000000; i++) {
    array.push(i);
  }
  return giveAccessTo(admin);
}

// letUserLogin("Adam"); // returns 'Access Granted to Adam'
/**
 * We keep our code DRY
 */

//HOF - Higher Order Functions
const giveAccessTo = (name) => "Access granted to " + name;

function authenticate(verify, person) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

function sing(person) {
  return "la la la my name is " + person.name;
}

function letPerson(person, fn) {
  // tell it what data to use + function
  if (person.level === "admin") {
    return fn(10, person); // Pass a number and the person object
  } else if (person.level === "user") {
    return fn(5, person); // Pass a number and the person object
  }
  return giveAccessTo(person.name);
}

console.log(letPerson({ level: "user", name: "Tim" }, authenticate)); // Now logs: 'Access granted to Tim'
console.log(letPerson({ level: "user", name: "Sally" }, sing)); // Logs: 'la la la my name is Sally'
