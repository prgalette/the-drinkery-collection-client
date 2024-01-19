import { Card } from "react-bootstrap";

const ReviewCard = ({ review }) => {
  return (
    <Card
      bg="secondary"
      style={{ width: "18rem" }}
      className="mb-2 mx-auto"
    >
      <Card.Header>{review.userCocktail.name}</Card.Header>
      <Card.Body>
        <Card.Title>{review.title}</Card.Title>
        <Card.Text>{review.review}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
