// Promises
// movePlayer(100, "Left")
//   .then(() => movePlayer(400, "Left"))
//   .then(() => movePlayer(10, "Right"))
//   .then(() => movePlayer(330, "Left"));

// Asyn Await would look like this
async function playerStart() {
  const firstMove = await movePlayer(100, "Left");
  await movePlayer(400, "Left");
  await movePlayer(10, "Right");
  await movePlayer(330, "Left");
}

async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}
fetchUsers();

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
const mispelledUrls = [
  "https://jsonplaceholde.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const starWarsApi = "https://swapi.dev/api/";

const getData = async function () {
  const [users, posts, albums] = await Promise.all(urls.map((url) => fetch(url).then((response) => response.json())));
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData();

const getMispelledData1 = async function () {
  try {
    const [users, posts, albums] = await Promise.all(mispelledUrls.map((url) => fetch(url).then((response) => response.json())));
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops", err);
  }
};

getMispelledData1(); //this will throw an error, because there is a typo in the urls array

const getStarWarsData = async function () {
  try {
    const response = await fetch("https://swapi.dev/api/");
    if (!response.ok) {
      throw new Error(`Failed to fetch API root: ${response.status} ${response.statusText}`);
    }

    const apiRoot = await response.json();
    console.log("Root API Data:", apiRoot);

    const allData = await Promise.all(
      Object.entries(apiRoot).map(async ([resourceName, resourceUrl]) => {
        const resourceResponse = await fetch(resourceUrl);
        if (!resourceResponse.ok) {
          throw new Error(`Failed to fetch ${resourceName}: ${resourceResponse.status} ${resourceResponse.statusText}`);
        }

        const resourceData = await resourceResponse.json();
        return { resourceName, data: resourceData };
      })
    );

    allData.forEach(({ resourceName, data }) => {
      console.log(`Data for ${resourceName}:`, data);
    });
  } catch (err) {
    console.error("Error fetching Star Wars data:", err);
  }
};

getStarWarsData();
