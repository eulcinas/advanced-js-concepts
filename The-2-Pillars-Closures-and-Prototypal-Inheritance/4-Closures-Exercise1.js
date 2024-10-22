console.log("Exercise: Closures");

function callMeMaybe() {
  const callMe = "Hi! I am now here!";
  setTimeout(function () {
    console.log(callMe);
  }, 4000);
}

// console.log(callMeMaybe());
callMeMaybe();
/**
 * immediatelly this returns "undefined" and after 4 seconds it returns string "Hi! I am now here!"
 */
