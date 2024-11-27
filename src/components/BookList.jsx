
import React from 'react';
import SingleBook from './SingleBook'

const BookList = ({ books }) => {
  return (
    <div className="d-flex flex-wrap">
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </div>
  );
};

export default BookList;
