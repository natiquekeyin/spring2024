let posts = [
  { title: "post1", author: "author1", body: "body of post1" },
  { title: "post2", author: "author2", body: "body of post2" },
  { title: "post3", author: "author3", body: "body of post3" },
];

function createPost(post, cb) {
  setTimeout(function () {
    posts.push(post);
    cb(); //now call cb (getPosts())...
  }, 3000);
}

function getPosts() {
  setTimeout(function () {
    posts.forEach(function (value) {
      document.querySelector(
        "#output"
      ).innerHTML += `<li>Title: ${value.title}</li><li>Author:${value.author}</li><li> Body:${value.body}</li> --------`;
    });
  }, 1000);
}

createPost(
  { title: "post4", author: "author4", body: "body of post4" },
  getPosts
);

// when createpost is done then call getPosts() ...

// getPosts();

// here we are having a problem... createpost() is taking 3 seconds while as getPosts() is runing in 1 second so we dont get the update posts here...

// Callback function:
