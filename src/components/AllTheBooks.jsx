import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../books/history.json";

const AllTheBooks = (props) => {
  return (
    <div className="d-flex flex-wrap">
      {horror.map((book) => (
        <Card key={book.asin} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AllTheBooks;
