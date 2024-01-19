import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../context/review.context";
import ReviewCard from "../components/ReviewCard";


const Reviews = () => {
  const { loading, reviews, getReviews } = useContext(ReviewContext);

  const { cocktailId } = useParams()

  return (
    <Container className="text-center">
      <h1 style={{ paddingTop: "80px" }}>Reviews</h1>

      <div className="reviews-page">
        {loading && <p>Loading...</p>}

        {reviews.length ? (
          <>
            {reviews.map((review) => {
              return (
                <Link
                  key={review._id}
                  to={`/reviews/${review._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ReviewCard cocktail={review} />
                </Link>
              );
            })}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
};

export default Reviews;
