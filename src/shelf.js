function shelfBook(book, shelf) {
  if (shelf.length < 3){
    shelf.unshift(book)
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++){
    if (shelf[i].title === title) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf) {
  var title_list = ''
  for (var i = 0; i < shelf.length; i++){
    if (i === shelf.length - 1) {
      title_list += (shelf[i].title)
    } else {
      title_list += (shelf[i].title) +', '
    }
  }

  return title_list; 
}



function searchShelf(shelf, title) {
  var isPresent = false  
  for (var i = 0; i < shelf.length; i++)
    if (title == shelf[i].title){
      isPresent = true  
    }
  return isPresent
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};