const myLibrary = [];

const submitBtn = document.getElementById("add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const error = document.getElementById("error");

const library = document.getElementById("library-container");

class Book {
  constructor(title, author, pages, isRead, key) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.key = key;
  }

  toggleIsRead() {
    this.isRead = !this.isRead;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (title.value === "" || author.value === "" || pages.value === "") {
    error.textContent = "Please enter all fields";
  } else {
    const newBook = new Book(
      title.value,
      author.value,
      pages.value,
      read.checked ? true : false,
      Math.floor(Math.random() * 10000) + 1
    );

    myLibrary.push(newBook);
    console.log(myLibrary);

    displayLibrary();
  }
});

function displayLibrary() {
  library.innerHTML = "";
  myLibrary.forEach((book) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    library.appendChild(newCard);
    newCard.innerHTML = `
    <div class="close-btn-container">
      <button class="close-btn" data-key=${book.key}>X</button>
    </div>
    <h1 class="card-header">${book.title}</h1>
    <h2 class="author">${book.author}</h2>
    <p class="pages">${book.pages}</p>
    <button class="read-btn ${book.isRead ? "read" : "not-read"}" data-key=${
      book.key
    }>${book.isRead ? "Finished" : "Not Finished"}</button>`;
  });
}

library.addEventListener("click", (e) => {
  // close button
  if (e.target.classList.contains("close-btn")) {
    const key = parseInt(e.target.dataset.key);

    for (i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].key === key) {
        myLibrary.splice(i, 1);
      }
    }

    displayLibrary();
    // read button
  } else if (e.target.classList.contains("read-btn")) {
    const key = parseInt(e.target.dataset.key);
    const book = myLibrary.find((item) => item.key === key);

    book.toggleIsRead();

    displayLibrary();
  }
});
