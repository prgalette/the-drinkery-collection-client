import { Link } from "react-router-dom";
import homeIcon from "../assets/home_icon_white.png";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const NavBar = () => {
  const { logOutUser, getToken } = useContext(AuthContext);

  return (
    <Container fluid style={{ backgroundColor: "rgb(176, 174, 189)"}}> 
      <Navbar sticky="top" bg="primary" data-bs-theme="dark" expand="lg" style={{ padding: "10px" }}>
        <Link to="/">
          {" "}
          <img
            src={homeIcon}
            alt="home icon"
            style={{ height: "30px", width: "auto", margin: "5px" }}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {!getToken() && (
          <Navbar.Collapse>
            <Nav
              className="me-auto"
              
            >
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

              <Button style={{ marginRight: "8px" }}>
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
            <Nav
              className="me-auto"
              
            >
              <Nav.Link to="/profile">Profile</Nav.Link>
              <Button onClick={logOutUser}>Logout</Button>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ marginRight: "8px" }}>
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
