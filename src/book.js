function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age, 
    pronouns: pronouns
  }
}

function saveReview(reviewName, array) {
  if (array.includes(reviewName) === false) {
    array.push(reviewName)
  }
}

function calculatePageCount(bookTitle) {
  var letters = bookTitle.length 
  return letters * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter, 
    genre: genre,
    pageCount: calculatePageCount(bookTitle)
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}