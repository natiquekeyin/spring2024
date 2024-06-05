class Project {
  static bookCount = 0;
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(bookTitle) {
    this.books.push(bookTitle);
    Project.bookCount++;
  }

  listBooks() {
    this.books.forEach(function (book) {
      let ul = document.createElement("ul");
      ul.innerHTML = `<td>${book}</td>`;
      document.querySelector("#data").appendChild(ul);
      document.querySelector(
        "#count"
      ).innerHTML = `Total books: ${Project.bookCount}`;
    });
  }
}

let form = document.querySelector("#form1");

form.addEventListener("submit", function (e) {
  let bookTitle = document.querySelector("#name").value;

  let book1 = new Project("Library");
  book1.addBook(bookTitle);
  book1.listBooks();
  e.preventDefault();
});
