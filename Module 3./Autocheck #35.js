const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    const indexBook = this.books.indexOf(oldName);
    if (indexBook !== -1) {
      this.books.splice(indexBook, 1, newName);
    }
  },
};

console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
console.log(bookShelf.updateBook("The last kingdom", "Dune"));
