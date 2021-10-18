function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book)
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book)
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book)
  }
}

function checkoutBook(library, bookTitle, bookGenre) {
  if (library.shelves[`${bookGenre}`].length !== 0){
    for (i = 0; i < library.shelves[`${bookGenre}`].length; i++){
      if (library.shelves[`${bookGenre}`][i].title === bookTitle) {
        library.shelves[`${bookGenre}`].splice(i, 1)
        return `You have now checked out ${bookTitle} from the ${library.name}`
      } else if (library.shelves[`${bookGenre}`].length === i - 1) {
        return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
      }
    }
  } else {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};