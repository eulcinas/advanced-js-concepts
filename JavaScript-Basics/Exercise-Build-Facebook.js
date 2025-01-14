const database = [
  {
    username: "andrei",
    password: "supersecret",
  },
  {
    username: "sally",
    password: "123",
  },
  {
    username: "ingrid",
    password: "777",
  },
];

const newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is so cool!",
  },
  {
    username: "Mitch",
    timeline: "JS is preeety cool!",
  },
];

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      return true;
    }
  }
  return false;
}

function singIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

const userNamePromprt = prompt("What's your username?");
const passwordPromprt = prompt("What's your password?");

singIn(userNamePromprt, passwordPromprt);
