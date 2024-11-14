const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index " + array[i]);
//   }, 3000);
// }

//* first solution is to change `var` for `let` to have a block scoped loop */
// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index " + array[i]);
//   }, 3000);
// }

//* use closure to create a function that gave access to the i variable which is kept in the closure */
for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(function () {
      console.log("I am at index " + array[closureI]);
    }, 3000);
  })(i);
}
