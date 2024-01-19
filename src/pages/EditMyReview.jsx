import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Form, InputGroup, Container, Card, Button } from "react-bootstrap";
import { get, put, axiosDelete } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import { Trash3Fill } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";

const EditMyReview = () => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const { reviewId } = useParams(); // <== ADD
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // This effect will run after the initial render and each time
  // the `reviewId` from the URL parameter changes
  useEffect(() => {
    get(`reviews/${reviewId}`)
      .then((response) => {
        /* 
                    We update the state with the review data coming from the response.
                    This way we set inputs to show the actual title and cocktail review
                */
        const oneReview = response.data;
        console.log("oneReview", oneReview);
        setTitle(oneReview.title);
        setReview(oneReview.review);
      })
      .catch((error) => console.log(error));
  }, [reviewId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newReview = {
      title,
      review,
    };

    put(`/reviews/${reviewId}`, newReview)
      .then((response) => {
        console.log("New Cocktail", response.data);
        navigate(`/profile/${review._id}`);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("submitting");
  };

  const removeReview = () => {
    axiosDelete(`/reviews/${reviewId}`)
      .then((response) => {
        console.log(response.data);
        navigate(`/profile/${user._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
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

          {user && <PencilSquare type="submit" size={15} />}
        </Form>
        <Trash3Fill
          size={35}
          style={{ marginTop: "10px" }}
          onClick={removeReview}
        />
      </Card>
    </Container>
  );
};

export default EditMyReview;
