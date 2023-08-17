import BookList from "./components/BookList";

const books = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
  // Add more books if you'd like
];

const App = () => {
  return (
    <div className="App">
      <h1>Book List</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;
