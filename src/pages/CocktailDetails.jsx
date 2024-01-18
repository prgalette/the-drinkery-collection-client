import { Container } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { CocktailContext } from "../context/cocktail.context";
import { AuthContext } from "../context/auth.context";
import { useContext, useState, useEffect } from "react";
import CardText from "react-bootstrap/CardText";
import { get } from "../services/authService";

const CocktailDetails = () => {
  const [cocktail, setCocktail] = useState(null);

  let { cocktailId } = useParams();

  const { cocktails, getCocktails } = useContext(CocktailContext);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // The `cocktailId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  useEffect(() => {
    if (!cocktails.length) {
      getCocktails();
    } else {
      console.log("Cocktail Id ===>", cocktailId);
      console.log("Cocktails at 22 ===>", cocktails);
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

  return (
    <Container className="d-flex justify-content-center" style={{ paddingTop: "80px" }}>
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

          {
            user && cocktail.userOwner != user._id ? (
              <Link
                to={`/cocktails/edit/${cocktailId}`}
                className="text-center"
              >
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
            )
            // <Button
            // type="submt"
            // variant="dark"
            // onClick={() => navigate(`/my-cocktail/edit/${cocktail._id}`)}
            // style={{
            //   margin: "10px",
            //   textTransform: "uppercase",
            //   fontWeight: "bold",
            // }}>Edit</Button>
          }
        </Card>
      )}
    </Container>
  );
};

export default CocktailDetails;
