import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Form, InputGroup, Container, Card, Button } from "react-bootstrap";
import { get, put, axiosDelete } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import { Trash3Fill } from "react-bootstrap-icons";

const EditMyCocktail = () => {
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

    put(`/cocktails/${cocktailId}`, newDrink)
      .then((response) => {
        console.log("New Cocktail", response.data);
        navigate(`/profile/${user._id}`);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("submitting");
  };

  const removeCocktail = () => {
    axiosDelete(`/cocktails/${cocktailId}`)
      .then((response) => {
        console.log(response.data);
        navigate(`/profile/${user._id}`);
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
              Photo
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
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </InputGroup>
          <p>List ingredients seperated with a comma and a space: ", "</p>

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
          </InputGroup>
          <p>List measurements seperated with a comma and a space: ", "</p>

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
              Edit
            </Button>
          )}
        </Form>
        <Trash3Fill
          size={35}
          style={{ marginTop: "10px" }}
          onClick={removeCocktail}
        />
      </Card>
    </Container>
  );
};

export default EditMyCocktail;
