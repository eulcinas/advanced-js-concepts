// Memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill(":)");
  console.log("Created!");

  return bigArray[index];
}

// console.log(heavyDuty(688));
// console.log(heavyDuty(688));
// console.log(heavyDuty(688));
// console.log(heavyDuty(688));

const getHeavyDuty = heavyDuty2();
// console.log(getHeavyDuty(688));
// console.log(getHeavyDuty(700));
// console.log(getHeavyDuty(800));

function heavyDuty2() {
  const bigArray = new Array(7000).fill(":)");
  console.log("Created Again!");

  return function (index) {
    return bigArray[index];
  };
}

// Encapsulation
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "boom";
  };
  setInterval(passTime, 1000);
  return {
    // launch: launch,
    totalPeaceTime: totalPeaceTime,
  };
};

const ohNo = makeNuclearButton();
ohNo.totalPeaceTime();
ohNo.launch();
