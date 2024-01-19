import { Link } from "react-router-dom";
import homeIcon from "../assets/home_icon_white.png";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const NavBar = () => {
  const { logOutUser, getToken, user } = useContext(AuthContext);

  return (
    <Container fluid style={{ backgroundColor: "rgb(176, 174, 189)" }}>
      <Navbar
        fixed="top"
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        style={{ padding: "10px" }}
      >
        <Navbar.Brand href="#" className="logo-container" as={Link} to="/">
          <img
            src={homeIcon}
            alt="home icon"
            style={{ height: "30px", width: "auto", margin: "5px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        {!getToken() && (
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" navbarScroll>
              <Nav.Link
                as={Link}
                to="/cocktails"
                style={{ fontStyle: "italic", textTransform: "uppercase" }}
              >
                Cocktails
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login"
                style={{ fontStyle: "italic", textTransform: "uppercase" }}
              >
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/signup"
                style={{ fontStyle: "italic", textTransform: "uppercase" }}
              >
                Signup
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                style={{ fontStyle: "italic", textTransform: "uppercase" }}
              >
                About
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <Button variant="secondary" style={{ marginRight: "8px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={1.25}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </Button>
            </Form>
          </Navbar.Collapse>
        )}

        {getToken() && (
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/cocktails"
                style={{ fontStyle: "italic", textTransform: "uppercase" }}
              >
                Cocktails
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/new-cocktail"
                style={{ fontStyle: "italic", textTransform: "uppercase" }}
              >
                Add Cocktail
              </Nav.Link>


              {
                user &&
                <Nav.Link
                  as={Link}
                  to={`/profile/${user._id}`}
                  style={{ fontStyle: "italic", textTransform: "uppercase" }}
                >
                  Profile
                </Nav.Link>
              }


              <Nav.Link
                as={Link}
                to="/about"
                style={{ fontStyle: "italic", textTransform: "uppercase" }}
              >
                About
              </Nav.Link>

              <Button
                variant="secondary"
                style={{
                  marginLeft: "10px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
                onClick={logOutUser}
              >
                Logout
              </Button>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary" style={{ marginRight: "8px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={1.25}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </Button>
            </Form>
          </Navbar.Collapse>
        )}
      </Navbar>
    </Container>
  );
};

export default NavBar;
