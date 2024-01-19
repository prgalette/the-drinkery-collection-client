import { Container, Card, Form, InputGroup, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate, useParams } from "react-router-dom";
import { post } from "../services/authService";

const AddReview = () => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const { cocktailId } = useParams();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // <== ADD
    e.preventDefault();

    const requestBody = { title, review };
    post(`/reviews/${cocktailId}`, requestBody)
      .then((response) => {
        // Once the review is created navigate to User Profile Page
        navigate(`/profile/${user._id}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ paddingTop: "80px" }}
    >
      <Card
        style={{
          width: "30rem",
          backgroundColor: "rgb(108, 117, 125)",
          color: "white",
          padding: "20px",
        }}
      >
        <Form className="text-center" onSubmit={handleSubmit}>
          <h3 className="text-center">Write a Review</h3>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Title
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Review
            </InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              name="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </InputGroup>

          <Button
            type="submt"
            variant="dark"
            style={{
              marginTop: "10px",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Create
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddReview;
