function fail() {
  try {
    throw new Error("oopsie!!!");
    console.log("This works");
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("Still good");
    return "returning fail";
  }
  console.log("never going to get here"); // not reachable}
}
fail();

// We can nest those try...catch methods
try {
  try {
    something();
  } catch (e) {
    throw new Error(e);
  }
} catch (e) {
  console.log("got it", e);
}

// This is a bad example because its asynchronous and the setTimeout goes to the WEB API
try {
  setTimeout(function () {
    fakevariable;
  }, 1000);
} catch (e) {
  console.log("got it", e);
}
