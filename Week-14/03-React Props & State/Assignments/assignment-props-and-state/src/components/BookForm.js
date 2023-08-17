import React, { Component } from "react";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, year } = this.state;
    const newBook = { title, author, year };
    this.props.onAddBook(newBook);
    this.setState({ title: "", author: "", year: "" });
  };

  render() {
    const { title, author, year } = this.state;

    return (
      <div>
        <h2>Add New Book</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Year:</label>
            <input
              type="text"
              name="year"
              value={year}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
    );
  }
}

export default BookForm;
