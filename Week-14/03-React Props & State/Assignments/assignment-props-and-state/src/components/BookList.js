import React, { Component } from "react";
import BookDetail from "./BookDetail";
import BookForm from "./BookForm";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  handleAddBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

  handleDeleteBook = (index) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((book, i) => i !== index),
    }));
  };

  render() {
    const { books } = this.state;

    return (
      <div>
        <h1>Book List</h1>
        <BookForm onAddBook={this.handleAddBook} />
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <ul>
            {books.map((book, index) => (
              <BookDetail
                key={index}
                book={book}
                onDelete={() => this.handleDeleteBook(index)}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default BookList;
