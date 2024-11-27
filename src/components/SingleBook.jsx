import { Card } from "react-bootstrap"

const SingleBook = (book) => {
   return (
    <Card style={{ margin: '1rem' }}>
    <Card.Img variant="top" src={book.cover} alt={`${book.title} cover`} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
    </Card.Body>
  </Card>)
}

export default SingleBook