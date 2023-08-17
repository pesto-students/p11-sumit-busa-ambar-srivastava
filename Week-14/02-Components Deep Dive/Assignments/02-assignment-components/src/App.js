import React from "react";
import BookList from "./components/BookList";
import WithLogging from "./components/WithLogging";

const BookListWithLogging = WithLogging(BookList);

function App() {
  return (
    <div className="App">
      <h1>My Book App</h1>
      <BookListWithLogging />
    </div>
  );
}

export default App;
