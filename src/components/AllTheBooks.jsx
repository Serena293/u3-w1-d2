import React, { Component } from "react";
import SingleBook from "./SingleBook";
import horror from "../books/history.json";

class AllTheBooks extends Component {
  state = {
    selectedBooks: [], // Array to track selected books
  };

  handleSelect = (bookId) => {
    this.setState((prevState) => {
      const { selectedBooks } = prevState;
      if (selectedBooks.includes(bookId)) {
        // If the book is already selected, remove it
        return {
          selectedBooks: selectedBooks.filter((id) => id !== bookId),
        };
      } else {
        // If the book is not selected, add it
        return {
          selectedBooks: [...selectedBooks, bookId],
        };
      }
    });
  };

  render() {
    return (
      <div className="d-flex flex-wrap">
        {horror.map((book) => (
          <SingleBook
            key={book.asin}
            book={book}
            isSelected={this.state.selectedBooks.includes(book.asin)} // Check if the book is in the selectedBooks array
            onSelect={() => this.handleSelect(book.asin)} // Pass book ID to handleSelect
          />
        ))}
      </div>
    );
  }
}

export default AllTheBooks;
