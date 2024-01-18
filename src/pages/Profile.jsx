import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { SERVER_URL } from "../services/SERVER_URL";
import { Card, Container, Image, Button } from "react-bootstrap";
import { get } from "../services/authService";
import CocktailCard from "../components/CocktailCard";
import { PencilSquare, Trash3 } from "react-bootstrap-icons";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [myCocktails, setMyCocktails] = useState([]);

  useEffect(() => {
    const getUser = () => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken && user) {
        get(`/users/${user._id}`)
          .then((response) => {
            console.log("User", response.data);
            setUserProfile(response.data);
            setLoading(false);
            get(`/cocktails/user-cocktails/${response.data._id}`)
              .then((response) => {
                console.log("Cocktails", response.data);
                setMyCocktails(response.data);
              })
              .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
              });
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          });
      } else {
        setErrorMessage("User not logged in");
      }
    };

    getUser();
  }, [user]);

  if (errorMessage) return <div>{errorMessage}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Container
        className="d-flex justify-content-center"
        style={{ paddingTop: "80px" }}
      >
        <Card
          className="UserDetailsPage bg-white-100"
          style={{ margin: "40px", width: "75%" }}
        >
          <Card.Header style={{ backgroundColor: "rgb(224, 223, 231)" }}>
            User Info
          </Card.Header>
          <Card.Body className="bg-white p-8 rounded-lg shadow-md mb-6">
            {userProfile && (
              <div>
                <Image
                  src={userProfile.photo}
                  alt="profile-photo"
                  style={{ width: "13em" }}
                  roundedCircle
                />
                <Card.Title className="text-2xl mt-4 font-bold absolute">
                  {userProfile.username}
                </Card.Title>

                <Card.Text>
                  <strong>Email:</strong> {userProfile.email}
                </Card.Text>
                <Button
                  style={{
                    marginTop: "10px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                  variant="secondary"
                >
                  Edit Profile
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>

      <Container className="text-center">
        <div className="cocktails-page">
          {loading && <p>Loading...</p>}

          {myCocktails.length ? (
            <>
              {myCocktails.map((cocktail) => {
                return (
                  <Link
                    key={cocktail._id}
                    to={`/my-cocktail/edit/${cocktail._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CocktailCard cocktail={cocktail} />
                  </Link>
                );
              })}
            </>
          ) : (
            <p>No Cocktails added...</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Profile;
