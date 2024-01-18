import { Link } from "react-router-dom";
import cocktailsImg from "../assets/AdobeStock_83433594.jpeg";
import randomCocktailsImg from "../assets/AdobeStock_130338586.jpeg";
import newCocktailImg from "../assets/AdobeStock_165729135.jpeg";
import { Container, Card, Carousel, Row, Col } from "react-bootstrap";

const Home = () => {
  // The home page showing the links to the 3 main pages of the app. You can leave this as it is.
  return (
    <Container fluid className="grid" style={{ paddingTop: "80px" }}>
      {/* <Carousel className="carousel-caption ml-100 mr-100">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dxl0hu3v9/image/upload/v1703166330/01_wucvds.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

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
