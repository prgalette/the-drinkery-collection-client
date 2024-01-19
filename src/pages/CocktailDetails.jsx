import { Container } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { CocktailContext } from "../context/cocktail.context";
import { ReviewContext } from "../context/review.context";
import { AuthContext } from "../context/auth.context";
import { useContext, useState, useEffect } from "react";
import CardText from "react-bootstrap/CardText";
import { get } from "../services/authService";
import { PencilSquare } from "react-bootstrap-icons";

const CocktailDetails = () => {
  const [cocktail, setCocktail] = useState(null);
  const [review, setReview] = useState(null)

  let { cocktailId } = useParams();
  let { reviewId } = useParams();

  const { cocktails, getCocktails } = useContext(CocktailContext);
  const { reviews, getReviews } = useContext(ReviewContext);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // The `cocktailId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    if (!cocktails.length) {
      getCocktails();
    } else {
      console.log("Cocktail Id ===>", cocktailId);
      console.log("Cocktails ===>", cocktails);
      let thisCocktail = cocktails.find(
        (cocktail) => cocktail._id == cocktailId
      );
      let combos = [];
      thisCocktail.ingredients.forEach((el) => {
        combos.push({ ingredient: "", measure: "" });
      });
      thisCocktail.ingredients.forEach((ingredient, i) => {
        console.log("ingredient", ingredient);

        combos[i].ingredient = ingredient;
      });
      thisCocktail.measures.forEach((measure, i) => {
        combos[i].measure = measure;
      });
      thisCocktail.combos = combos;
      setCocktail(thisCocktail);

      console.log("This cocktail ===>", thisCocktail);
    }
  }, [cocktails, cocktailId]);

  useEffect(() => {
    if (!reviews.length) {
      getReviews();
    } else {
      console.log("Review Id ===>", reviewId);
      console.log("Reviews ===>", reviews);
      let thisReview = review.find(
        (review) => review._id == reviewId
      );
    }
  }, [reviews, reviewId])

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ paddingTop: "80px" }}
    >
      {cocktail && (
        <Card
          className="bg-secondary text-white"
          style={{ width: "50%", margin: "20px 40px" }}
        >
          <Card.Img
            variant="top"
            src={cocktail.photo}
            style={{ display: "block" }}
          />

          <>
            <p
              style={{
                fontSize: "2vw",
                position: "absolute",
                color: "grey",
                display: "flex",
                justifyContent: "center",
                top: "190px",
                left: "380px",
                right: "380px",
                textAlign: "center",
              }}
            ></p>
          </>

          <Card.Body>
            <Card.Title as="h2" className="text-center">
              {cocktail.name}
            </Card.Title>
            <Card.Text className="text-center">
              {cocktail.combos
                .map((el) => `${el.measure} of ${el.ingredient}`)
                .join(", ")}
            </Card.Text>
          </Card.Body>

          {user && cocktail.userOwner != user._id ? (
            <Link to={`/cocktails/edit/${cocktailId}`} className="text-center">
              <Button
                type="submt"
                variant="dark"
                style={{
                  margin: "10px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Make New Edition
              </Button>
            </Link>
          ) : (
            <></>
          )}

          {user && review.userOwner != user._id ? (
            <Link to={"/new-review"} className="text-center">
              <PencilSquare type="submit" size={15} />
            </Link>
          ) : (
            <></>
          )}
        </Card>
      )}
    </Container>
  );
};

export default CocktailDetails;
