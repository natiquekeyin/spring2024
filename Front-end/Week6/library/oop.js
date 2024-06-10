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
        this.showAlert("No field should be empty", "error");
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><button class="delete">X</button></td>`;
        // append the newly created row in the table body with id book-list
        document.querySelector("#book-list").appendChild(row);
        // this.showAlert("Book succesfully added", "success");
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

    deleteBook(elemToDelete) {
      if (elemToDelete.className === "delete") {
        elemToDelete.parentElement.parentElement.remove();
        this.showAlert("Book removed successefully", "success");
      } else {
        this.showAlert("Wrong area clicked, please click on X", "error");
      }
    }
  }

  // Store class that be used to store and retrieve the books we have added to the local storage...

  class Store {
    static addBook(book) {
      var books = Store.getBooks(); //read already stored books from the memory
      books.push(book);
      localStorage.setItem("books", JSON.stringify(books));
      // JSON.stringify() will convert normal objets into "JSON objects"
    } //will add the book to the localStorage

    static getBooks() {
      var books;
      if (localStorage.getItem("books") === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem("books"));
        // parse method will convert the json object into normal object..
      }
      return books;
    } //will read the already stored books on localStorage
    static displayBooks() {
      var books = Store.getBooks();
      books.forEach((book) => {
        var objBook = new Book();
        objBook.addBookToList(book); //??
      });
    } //display the stored books from localStorage on the web page...
    static removeBook() {
      // try out remove book..it will goto localStorage and remove the book that has been removed from UI.
    } // will remvoe the book from the memory
  }

  let form = document.querySelector("#form1");

  form.addEventListener("submit", function (e) {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    let book = new Book(title, author, isbn); //create the object

    // Book.addBookToList(book); // ????NO.. addBookToList() is not a statice
    book.addBookToList(book);
    Store.addBook(book);
    book.clearFields();
    book.showAlert("Book successfully added", "success");

    e.preventDefault();
  });

  this.document
    .querySelector("#data")
    .addEventListener("click", function (evt) {
      var book = new Book(); //create this object to get access to deleteBook()
      book.deleteBook(evt.target);
      Store.removeBook(book); // method removes teh book from memory
      evt.preventDefault();
    });

  Store.displayBooks();
});
