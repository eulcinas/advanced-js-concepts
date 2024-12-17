// try {
//   setTimeout(function () {
//     fakeVariable;
//   }, 1000);
// } catch (e) {
//   console.log("got it", e);
// }

// .catch()

Promise.resolve("asyncFail")
  .then((response) => {
    // throw new Error("#1 fail");
    // return response;
    Promise.resolve().then(() => {
      throw new Error("#3 fail");
    });
    return 5;
  })
  .then((response) => {
    console.log(response);
  })
  // .catch((err) => {
  // return err;
  //   throw new Error("#2");
  // })
  // .then((response) => {
  // console.log(response.message);
  //   console.log(response);
  // })
  .catch((err) => {
    console.log("final error", err);
  });
