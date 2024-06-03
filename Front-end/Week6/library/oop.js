// convert the fucntional code to the OOP code.. using classes and objects

window.addEventListener("DOMContentLoaded", function () {
  class Book {
    constructor(t, a, i) {
      this.title = t;
      this.author = a;
      this.isbn = i;
    }

    addBookToList(book) {
      if (book.title === "" || book.author === "" || book.isbn === "") {
        book.showAlert("No field should be empty", "error");
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><button class="delete">X</button></td>`;
        // append the newly created row in the table body with id book-list
        document.querySelector("#book-list").appendChild(row);
        book.showAlert("Book succesfully added", "success");
      }
    }

    clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#author").value = "";
      document.querySelector("#isbn").value = "";
    }

    showAlert(m, c) {
      let div = document.createElement("div");
      div.innerText = m;
      div.className = c;
      div.id = "box";
      document.querySelector("#notification").appendChild(div);
      // after 3 seconds remove this box...
      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }
  }

  let form = document.querySelector("#form1");

  form.addEventListener("submit", function (e) {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    let book = new Book(title, author, isbn);

    book.addBookToList(book);
    book.clearFields();

    e.preventDefault();
  });
});
