let book = [];

function addBooks(title, author, pages) {
  book.push({ title, author, pages });
}

function viewBook() {
  book.forEach((book, index) => {
    console.log(
      `${index + 1} - ${book.title} - ${book.author} - ${book.pages}`
    );
  });
}

function findBook(title) {
  return book.find((book) => book.title === title);
}

function checkLongBook() {
  let longBook = book.some((book) => book.pages > 300);
  console.log(longBook);
}

function checkSmallBook() {
  let smallBook = book.every((book) => book.pages < 150);
  console.log(smallBook);
}

function sortBook() {
  let sort = book.sort((book, book2) => book.pages - book2.pages);
  console.log(sort);
}

function totalPagesBook() {
  let total = book.reduce((acc, total) => acc + total.pages, 0);
  console.log(total);
}

addBooks("harry potter", "rk", 300);
addBooks("atomic habbit", "nahid", 350);
addBooks("48 laws", "fazil", 120);
addBooks("clean code", "chat gpt", 180);

viewBook();
console.log(findBook("harry potter"));
checkLongBook();
checkSmallBook();
sortBook();
totalPagesBook();
