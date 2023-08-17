import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          year={book.year}
        />
      ))}
    </div>
  );
};

export default BookList;
