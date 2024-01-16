import { Link } from "react-router-dom";
import cocktailsImg from "../assets/AdobeStock_83433594.jpeg";
import randomCocktailsImg from "../assets/AdobeStock_130338586.jpeg";
import newCocktailImg from "../assets/AdobeStock_165729135.jpeg";
import { Container, Card } from "react-bootstrap";

const Home = () => {
  // The home page showing the links to the 3 main pages of the app. You can leave this as it is.
  return (
    <Container fluid className="grid" style={{ paddingTop: "50px"}}>
      <Link to="/cocktails">
        <Card
          className="d-flex justify-content-center"
          style={{ width: "26rem", height: "26rem", margin: "10px" }}
        >
          <img src={cocktailsImg} className="card-img-top" alt="..." />
          <Card.Body className="card-body">
            <h3 className="card-title">All Beers</h3>
            <p className="card-text">
              Explore a collection of cocktails crafted by various mixologist.
            </p>
          </Card.Body>
        </Card>
      </Link>
      

      <Link to="/random-cocktail">
        <Card
          className="d-flex justify-content-center"
          style={{ width: "26rem", height: "26rem", margin: "10px" }}
        >
          <img src={randomCocktailsImg} className="card-img-top" alt="..." />
          <Card.Body className="card-body">
            <h3 className="card-title">Random Cocktail</h3>
            <p className="card-text">
              Discover unique cocktails with intriguing details at random, one
              drink at a time.
            </p>
          </Card.Body>
        </Card>
      </Link>
      

      <Link to="/new-cocktail">
        <Card
          className="d-flex justify-content-center"
          style={{ width: "26rem", height: "26rem", margin: "10px" }}
        >
          <img src={newCocktailImg} className="card-img-top" alt="..." />
          <Card.Body className="card-body">
            <h3 className="card-title">New Cocktail</h3>
            <p className="card-text">
              Unleash your inner mixologist and share your latest creation with
              the cocktail community.
            </p>
          </Card.Body>
        </Card>
      </Link>
    </Container>
  );
};

export default Home;
