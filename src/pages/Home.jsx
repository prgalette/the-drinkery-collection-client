import { Link } from "react-router-dom";
import cocktailsImg from "../assets/AdobeStock_83433594.jpeg";
import randomCocktailsImg from "../assets/AdobeStock_130338586.jpeg";
import newCocktailImg from "../assets/AdobeStock_165729135.jpeg";
import { Container, Card, Carousel, Row, Col } from "react-bootstrap";

const Home = () => {
  // The home page showing the links to the 3 main pages of the app. You can leave this as it is.
  return (
    <Container fluid className="grid" style={{ paddingTop: "750px" }}>
      <Carousel className="carousel-caption ml-100 mr-100">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dxl0hu3v9/image/upload/v1705650876/the_drinkery_collection_slider_01_uaobej.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>Welcome to the Drinkery Collection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dxl0hu3v9/image/upload/v1705655185/the_drinkery_collection_slider_09_tvz4al.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>Participate in our growing database and keep up with the latest drink trends</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dxl0hu3v9/image/upload/v1705655182/the_drinkery_collection_slider_08_o3gjxs.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>
              Become your very own bartender
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Link to="/cocktails">
        <Card
          className="d-flex justify-content-center"
          style={{
            width: "26rem",
            height: "26rem",
            margin: "10px",
            backgroundColor: "rgb(108, 117, 125)",
            color: "white",
          }}
        >
          <img src={cocktailsImg} className="card-img-top" alt="..." />
          <Card.Body className="card-body">
            <h3 className="card-title">All Cocktails</h3>
            <p className="card-text">
              Explore a collection of cocktails crafted by various mixologist.
            </p>
          </Card.Body>
        </Card>
      </Link>

      <Link to="#">
        <Card
          className="d-flex justify-content-center"
          style={{
            width: "26rem",
            height: "26rem",
            margin: "10px",
            backgroundColor: "rgb(108, 117, 125)",
            color: "white",
          }}
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
          style={{
            width: "26rem",
            height: "26rem",
            margin: "10px",
            backgroundColor: "rgb(108, 117, 125)",
            color: "white",
          }}
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
