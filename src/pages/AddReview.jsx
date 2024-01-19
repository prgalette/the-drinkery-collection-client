import { Container, Card, Form, InputGroup, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // <== ADD
    e.preventDefault();

    const requestBody = { title, review };
    post("/profile/:id", requestBody)
      .then((response) => {
        // Once the review is created navigate to User Profile Page
        navigate("/profile/:id");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ paddingTop: "80px" }}
    >
      <Card>
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
              name={title}
              value=""
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
              name={review}
              value=""
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
