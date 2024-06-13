// XMLHttpRequest() ..

// Fetch API...

// console.log(fetch("./data/data.txt"));

// fetch("./data/data.txt")
//   .then(function (response) {
//     return response.text(); //
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch();

document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  fetch("./data/data2.txt")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Not found");
      }

      return response.text();
    })
    .then((data) => {
      document.querySelector(
        "#output"
      ).innerHTML = `The text in data.txt is <strong> ${data} </strong>`;
    })
    .catch((error) => {
      console.log("Something bad happened: ", error);
    });
}

document.querySelector("#btn2").addEventListener("click", loadJSON);

function loadJSON() {
  fetch("./data/user.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(
        "#output"
      ).innerHTML = `<div><h1>ID:${data.id}</h1><p>NAME:${data.name}</p><p>EMAIL:${data.email}</p></div>`;
    });
}

document.querySelector("#btn3").addEventListener("click", loadJSONS);

function loadJSONS() {
  fetch("./data/users.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `<div><h4>ID:${user.id}</h4><p>NAME:${user.name}</p><p>EMAIL:${user.email}</p></div>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}

document.querySelector("#btn4").addEventListener("click", loadGithub);

function loadGithub() {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `<div><p>${user.id}</p><p>${user.login}</p><p><img src="${user.avatar_url}" width="100"/></div>`;
      });

      document.querySelector("#output").innerHTML = output;
    });
}
