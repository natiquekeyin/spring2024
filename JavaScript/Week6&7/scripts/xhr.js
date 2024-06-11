document.querySelector("#btn1").addEventListener("click", loadData);

function loadData() {
  // create and XHR object
  const xhr = new XMLHttpRequest();

  // Configurae the request -
  xhr.open("GET", "./data/data.txt");

  // what to do when data is available

  xhr.onload = function () {
    if (this.status === 200) {
      // 200 Ok... 404 not found... 500.. server porblem
      document.querySelector(
        "#output"
      ).innerHTML = ` <strong> ${this.responseText}</strong>`;
    }
  };

  //   send the request..
  xhr.send();
}
