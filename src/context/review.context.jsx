import { createContext, useEffect, useState  } from "react";
import { get } from "../services/authService";

const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const getReviews = () => {
        get("/reviews")
          .then((response) => {
            console.log("Reviews ===>", response.data);
            setReviews(response.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }

      useEffect(() => {
    
        getReviews()
    
    }, [])

    return (
        <ReviewContext.Provider value={{ reviews, loading, getReviews, }}>
            {children}
        </ReviewContext.Provider>
      );

};

export { ReviewContext, ReviewProvider }