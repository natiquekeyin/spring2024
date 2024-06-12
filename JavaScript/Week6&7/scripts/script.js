let posts = [
  { title: "post1", author: "author1", body: "body of post1" },
  { title: "post2", author: "author2", body: "body of post2" },
  { title: "post3", author: "author3", body: "body of post3" },
];

// function createPost(post, cb) {
//   setTimeout(function () {
//     posts.push(post);
//     cb(); //now call cb (getPosts())...
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(function () {
//     posts.forEach(function (value) {
//       document.querySelector(
//         "#output"
//       ).innerHTML += `<li>Title: ${value.title}</li><li>Author:${value.author}</li><li> Body:${value.body}</li> --------`;
//     });
//   }, 1000);
// }

function createPost(post) {
  return new Promise(function (resolve, reject) {
    posts.push(post);
    resolve();
  });
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

// console.log(
//   createPost({ title: "post4", author: "author4", body: "body of post4" })
// );

createPost({ title: "post4", author: "author4", body: "body of post4" }).then(
  getPosts
);
// when createpost is done then call getPosts() ...

// getPosts();

// here we are having a problem... createpost() is taking 3 seconds while as getPosts() is runing in 1 second so we dont get the update posts here...

// Callback function:

// Adam's 
// // [12:25 PM] Adam Stevenson
// getPosts is not initialized until the Promise is fullfilled?

// // Brian: 
// do you're just saying hey i ALSO want to do get posts BUT i don't want to do getposts UNTIL i know that my createpost has happened successfully