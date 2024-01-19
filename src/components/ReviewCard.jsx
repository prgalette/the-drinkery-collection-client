import { Card } from "react-bootstrap";

const ReviewCard = () => {
  return (
    <Card bg="secondary" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Review</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;