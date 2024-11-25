// Idempotence:

function notGood(num) {
  // return Math.random(num);
  console.log(num);
}

console.log(notGood(5));

console.log(Math.abs(Math.abs(-50)));
