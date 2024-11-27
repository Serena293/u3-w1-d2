import React, { Component } from "react";
import SingleBook from "./SingleBook";
import horror from "../books/history.json";

class AllTheBooks extends Component {
  state = {
    selectedBooks: [], 
  };

  handleSelect = (bookId) => {
    this.setState((prevState) => {
      const { selectedBooks } = prevState;
      if (selectedBooks.includes(bookId)) {
       
        return {
          selectedBooks: selectedBooks.filter((id) => id !== bookId),
        };
      } else {
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
            isSelected={this.state.selectedBooks.includes(book.asin)} 
            onSelect={() => this.handleSelect(book.asin)} t
          />
        ))}
      </div>
    );
  }
}

export default AllTheBooks;
