import { useState } from "react";
import { Form, InputGroup, Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { post } from "../services/authService";

const AddCocktail = () => {
  const [name, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");


  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [measures, setMeasures] = useState([]);
  const navigate = useNavigate();

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  

  const handleSubmit = (e) => {
    // <== ADD
    e.preventDefault();

    const requestBody = { name, description, ingredients, measures};
    post("/cocktails", requestBody)
      .then((response) => {
        // Once the cocktail is created navigate to Cocktails Page
        navigate("/cocktails");
      })
      .catch((error) => console.log(error));
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
          <h3 className="text-center">Add Cocktail</h3>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Photo URL
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3 ">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Ingredients
            </InputGroup.Text>

            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
            
            <Button
              onClick={() => {
                setIngredients((prev) => [...prev, ingredient]);
                setIngredient("");
              }}
              onChange={handleFormChange}
              variant="dark"
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Add
            </Button>
          </InputGroup>

          <div>
              {ingredients.length ? (
                ingredients.map((ingredient) => (
                  <div style={{
                    display: "flex",
                    justifyContent: "normal"
                  }}>
                    <p style={{ marginLeft: "10px"}}>{ingredient}</p>{" "}
                    
                    <p
                      onClick={() =>
                        setIngredients((prev) =>
                          prev.filter((ingr) => ingr !== ingredient)
                        )
                      }
                    >
                      <Button size="sm" variant="outline-dark" style={{ marginLeft: "10px"}}>delete</Button>
                    </p>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Measurements
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              type="text"
              name="measurements"
              value={measures}
              onChange={(e) => setMeasures(e.target.value)}
            />
            <Button
              onClick={() => {
                setMeasurements((prev) => [...prev, measures]);
                setMeasures("");
              }}
              onChange={handleFormChange}
              variant="dark"
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Add
            </Button>
          </InputGroup>

          <div>
              {measurements.length ? (
                measurements.map((measurement) => (
                  <div style={{
                    display: "flex",
                    justifyContent: "normal"
                  }}>
                    <p style={{ marginLeft: "10px"}}>{measurement}</p>{" "}
                    
                    <p
                      onClick={() =>
                        setIngredients((prev) =>
                          prev.filter((ingr) => ingr !== measurement)
                        )
                      }
                    >
                      <Button size="sm" variant="outline-dark" style={{ marginLeft: "10px"}}>delete</Button>
                    </p>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>

          <InputGroup>
            <InputGroup.Text>Instructions</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              name="intructions"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>

          <Button
            type="submt"
            variant="dark"
            style={{
              marginTop: "10px",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Create
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddCocktail;
