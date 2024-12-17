(function () {
  try {
    throw new Error();
  } catch (err) {
    var err = 5;
    var boo = 10;
    console.log("catch", err);
  }
  //Guess what the output is here:
  console.log(err);
  console.log(boo);
})();
