const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    }),
      (document.body.innerHTML = output);
  }, 1000);
}

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

createPost({ title: "Post three", body: "This is post three" });

getPosts();

// Play with fetch and promise

const userData = fetch("https://jjsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("After fetch, first we got ", res);
    return res.json();
  })
  .then((data) => console.log("Using promise / then eventually ", data))
  .catch((err) => {
    console.log("Crap! ");
    console.log("err: ", err);
  });

async function getData() {
  console.log("Start testing async await");
  try {
    const res = await fetch("https://jjsonplaceholder.typicode.com/users");
    console.log("With await First we get", res);
    const data = await res.json();
    console.log("Using async await eventually get ", data);
  } catch (err) {
    (err) => {
      console.log("Somthing is wrong! ");
      console.log("err: ", err);
    };
    console.log("get data failed");
  }
  console.log("code stopped");
}

getData();

console.log("All synchronous code finished");
