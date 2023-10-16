// Book class
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }
  
  // Library class
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Add a book to the library
    addBook(book) {
      this.books.push(book);
    }
  
    // Remove a book from the library
    removeBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
    }
  
    // Display books in the table
    displayBooks() {
      const table = document.getElementById("book-table");
      table.innerHTML = `
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th></th>
        </tr>
      `;
  
      this.books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><button onclick="removeBook('${book.isbn}')">Remove</button></td>
        `;
        table.appendChild(row);
      });
    }
  }
  
  // Create a new library
  const myLibrary = new Library();
  
  // Function to add a book
  function addBook() {
    const titleInput = document.getElementById("title-input");
    const authorInput = document.getElementById("author-input");
    const isbnInput = document.getElementById("isbn-input");
  
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;
  
    if (title && author && isbn) {
      const book = new Book(title, author, isbn);
      myLibrary.addBook(book);
      myLibrary.displayBooks();
  
      // Clear input fields
      titleInput.value = "";
      authorInput.value = "";
      isbnInput.value = "";
    }
  }
  
  // Function to remove a book
  function removeBook(isbn) {
    myLibrary.removeBook(isbn);
    myLibrary.displayBooks();
  }
  
  // Initial display of books
  myLibrary.displayBooks();