window.addEventListener("DOMContentLoaded", function () {
  let body = document.body;
  let cat = document.querySelector("#cat");

  body.addEventListener("click", function (e) {
    console.log("body clicked");
  });

  cat.addEventListener("click", function (evt) {
    document.querySelector("#s1").innerHTML = "You Clicked on Cat";
    document.querySelector("#c2").innerText = "My Cat";

    cat.src = "../images/cat2.jpg";
    evt.stopPropagation();
  });

  document.querySelector("#c2").addEventListener("click", function (e) {
    document.querySelector("#s1").innerText = "You clicked the cat text";
  });
});
