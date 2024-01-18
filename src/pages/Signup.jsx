import { post } from "../services/authService";

import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

import { Container, Form, Card, InputGroup, Button } from "react-bootstrap";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleTextInput = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post("/auth/signup", newUser)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ paddingTop: "80px" }}
    >
      <Card
        style={{
          width: "30rem",
          backgroundColor: "rgb(108, 117, 125)",
          color: "white",
          padding: "20px",
        }}
      >
        <Form className="text-center" onSubmit={handleSubmit}>
          <h3 className="text-center">Signup</h3>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Username
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="username"
              type="text"
              value={newUser.username}
              onChange={handleTextInput}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Email
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="email"
              type="email"
              value={newUser.email}
              onChange={handleTextInput}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Password
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="password"
              type="password"
              value={newUser.password}
              onChange={handleTextInput}
            />
          </InputGroup>

          <Button
            variant="dark"
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            type="submit"
          >
            Signup
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Signup;
