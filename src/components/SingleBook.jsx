import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleBook = ({ book, isSelected, onSelect }) => {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "10px",
        cursor: "pointer",
        border: isSelected ? "2px solid green" : "1px solid #ddd",
      }}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={onSelect}>
          {isSelected ? "Selected" : "Select"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
