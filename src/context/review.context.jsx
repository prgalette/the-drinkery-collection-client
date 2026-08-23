import { createContext, useEffect, useState } from "react";
import { get } from "../services/authService";

const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getReviews = () => {
    get("/reviews/user-reviews")
      .then((response) => {
        console.log("Reviews ===>", response.data);
        setReviews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const addReview = (newReview) => {
    setReviews((currentReviews) => [...currentReviews, newReview]);
  };

  const updateReview = (updatedReview) => {
    setReviews((currentReviews) =>
      currentReviews.map((review) =>
        review._id === updatedReview._id ? updatedReview : review,
      ),
    );
  };

  const removeReview = (reviewId) => {
    setReviews((currentReviews) =>
      currentReviews.filter((review) => review._id !== reviewId),
    );
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <ReviewContext.Provider
      value={{ reviews, loading, getReviews, updateReview, removeReview, addReview }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };
