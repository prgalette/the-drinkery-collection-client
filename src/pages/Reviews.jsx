import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ReviewContext } from "../context/review.context";
import ReviewCard from "../components/ReviewCard";

const Reviews = () => {
  const { loading, reviews, getReviews } = useContext(ReviewContext);

  return (
    <Container className="text-center">
      <h1 style={{ paddingTop: "80px" }}>Reviews</h1>

      <div className="reviews-page">
        {loading && <p>Loading...</p>}
{loading ? (
  <p>Loading...</p>
) : reviews.length ? (
  <>
    {reviews.map((review) => {
      return (
        <div key={review._id}>
          <ReviewCard review={review} />

          <Link
            to={`/my-review/edit/${review._id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="dark"
              style={{
                marginBottom: "20px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Edit Review
            </Button>
          </Link>
        </div>
      );
    })}
  </>
) : (
  <p>No reviews yet.</p>
)}
      </div>
    </Container>
  );
};

export default Reviews;
