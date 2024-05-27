window.addEventListener("DOMContentLoaded", function () {
  let cat = document.querySelector("#cat");
  let body = document.body;
  let btn = document.querySelector("#more");

  cat.addEventListener("click", function (e) {
    cat.src = nextImageUrl();
  });

  body.addEventListener("mousemove", function (e) {
    document.querySelector("#posX").innerText = e.clientX;
    document.querySelector("#posY").innerText = e.clientY;
  });

  btn.addEventListener("click", function (e) {
    let ul = document.createElement("ul");

    // let li = document.createElement("li");

    // li.innerText = cats[0];

    // ul.appendChild(li);

    cats.forEach(function (url) {
      let li = document.createElement("li");
      //   li.innerHTML = `<a href="${url}">${url}</a>`;

      let a = document.createElement("a");
      a.href = url;
      a.innerText = url;
      li.appendChild(a);
      ul.appendChild(li);
    });

    document.querySelector("#urls").appendChild(ul);
  });

  var currentImageUrl = 0;
  function nextImageUrl() {
    if (currentImageUrl === cats.length - 1) {
      currentImageUrl = 0;
    }
    return cats[currentImageUrl++];
  }

  this.setInterval(function () {
    cat.src = nextImageUrl();
  }, 3000);
});
