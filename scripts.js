const myLibrary = [];

const submitBtn = document.getElementById("add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const library = document.getElementById("library-container");

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  console.log(myLibrary);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookPages = pages.value;
  const bookIsRead = read.value;

  const book = new Book(bookTitle, bookAuthor, bookPages, bookIsRead);

  const newCard = document.createElement("div");
  newCard.classList.add("library-container");
  library.appendChild(newCard);
  newCard.innerHTML = `<div class="card">
  <h1 class="card-header">${book.title}</h1>
  <h2 class="author">${book.author}</h2>
  <p class="pages">${book.pages}</p>
  <button class="read">${read.checked ? "Finished" : "Not Finished"}</button>
</div>`;

  addBookToLibrary(book);
});

const bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", 368, false);
addBookToLibrary(bloodMeridian);
