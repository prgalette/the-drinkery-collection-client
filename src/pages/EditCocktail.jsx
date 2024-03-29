import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import {
  Form,
  InputGroup,
  Container,
  Card,
  Button,
  FormGroup,
} from "react-bootstrap";
import { get, post } from "../services/authService";
import { AuthContext } from "../context/auth.context";

const EditCocktail = () => {
  const [name, setName] = useState("");
  const [instructions, setInstructions] = useState("");

  const [ingredients, setIngredients] = useState("");
  // const [measurement, setMeasurement] = useState('')
  const [measurements, setMeasurements] = useState("");
  const [photo, setPhoto] = useState("");
  const { cocktailId } = useParams(); // <== ADD
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // This effect will run after the initial render and each time
  // the `cocktailId` from the URL parameter changes
  useEffect(() => {
    // <== ADD
    get(`/cocktails/${cocktailId}`)
      .then((response) => {
        /* 
        We update the state with the cocktail data coming from the response.
        This way we set inputs to show the actual name and description of the cocktail
      */
        const oneCocktail = response.data;
        console.log("oneCocktail", oneCocktail);
        setName(oneCocktail.name);
        setInstructions(oneCocktail.instructions);
        let theseMeasurements = oneCocktail.measures.join(", ");
        setMeasurements(theseMeasurements);
        setIngredients(oneCocktail.ingredients.join(", "));
        setPhoto(oneCocktail.photo);
      })
      .catch((error) => console.log(error));
  }, [cocktailId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let measures = measurements.split(", ");
    let theseIngredients = ingredients.split(", ");

    let newDrink = {
      name,
      ingredients: theseIngredients,
      instructions,
      measures,
      photo,
    };

    post("/cocktails", newDrink)
      .then((response) => {
        console.log("New Cocktail", response.data);
        navigate(`/profile/${user._id}`);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("submitting");
  };

  // const { name, ingredients, instructions, category, alcoholic, measures, photo } = req.body;

  // const handleFormChange = (e) => {
  //   e.preventDefault()
  //   console.log("Submitting")
  // }

  // const handleFormSubmit = (e) => {                     // <== ADD
  //   e.preventDefault();
  //   // Create an object representing the body of the PUT request
  //   const requestBody = { name, description, ingredients, measures };
  // }
  // Make a PUT request to the API update the project
  //   put(`/cocktails/${cocktailId}`, requestBody)
  //     .then((response) => {
  //       // Once the request is resolved successfully and the project
  //       // is updated we navigate back to the Project Details page (client-side)
  //       navigate(`/cocktails/${cocktailId}`)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // };

  // const deleteCocktail = () => {                    //  <== ADD
  //   // Make a DELETE request to delete the project
  //   axiosDelete(`/cocktails/${cocktailId}`)
  //     .then(() => {
  //       // Once the delete request is resolved successfully
  //       // navigate back to the list of projects.
  //       navigate("/cocktails");
  //     })
  //     .catch((err) => console.log(err));
  // };

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
          margin: "20px",
        }}
      >
        <Form className="text-center" onSubmit={handleSubmit}>
          <h3 className="text-center">Make It My Own!</h3>

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
              onChange={(e) => setName(e.target.value)}
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

          {/* <InputGroup className="mb-3">
        <Form.Control aria-label="Default"
            aria-describedby="inputGroup-sizing-default" type="file" />
        </InputGroup> */}

          <InputGroup size="sm" className="mb-3 ">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Ingredients
            </InputGroup.Text>

            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </InputGroup>
          <p>List ingredients seperated with a comma and a space: ", "</p>

          {/* <div>
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
          </div> */}

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Measurements
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              type="text"
              name="measurements"
              value={measurements}
              onChange={(e) => setMeasurements(e.target.value)}
            />
            {/* <Button
            onClick={() => {
              setMeasurements((prev) => [...prev, measurement]);

            }}
            onChange={handleFormChange}
            variant="dark"
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Add
          </Button> */}
          </InputGroup>
          <p>List measurements seperated with a comma and a space: ", "</p>

          {/* <div>
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
          </div> */}

          <InputGroup>
            <InputGroup.Text>Instructions</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              name="intructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </InputGroup>

          {user && (
            <Button
              type="submt"
              variant="dark"
              style={{
                marginTop: "10px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          )}
        </Form>
        {/* <Button
      type="submt"
      variant="dark"
      style={{
        marginTop: "10px",
        textTransform: "uppercase",
        fontWeight: "bold",
      }}>
        Remove
      </Button> */}
      </Card>
    </Container>
  );
};

export default EditCocktail;
