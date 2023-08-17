import React, { Component } from "react";

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  toggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { book, onDelete } = this.props;
    const { showDetails } = this.state;

    return (
      <li>
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
        <button onClick={this.toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails && <div>{/* Additional details */}</div>}
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }
}

export default BookDetail;
