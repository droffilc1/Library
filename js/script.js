// let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.info = function() {
    console.log(author)
  }
}


const book = new Book('Lolita', 'Vladimir Nabokov', '336', 'yes')
book.info()

// function addBookToLibrary() {
//   // do stuff here
// }


function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }

}

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')
player1.sayName()
player2.sayName()
