import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CocktailContext } from '../context/cocktail.context'
import CocktailCard from "../components/CocktailCard";

const Cocktails = () => {
  const { loading, cocktails, getCocktails } = useContext(CocktailContext);

  useEffect(() => {
    if (!cocktails.length) {
      getCocktails();
    }
  }, [cocktails]);

  return (
    <Container className="text-center">
      <h1 style={{ paddingTop: "80px" }}>Welcome to the Drinkery Collection!</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur
      </p>

      <div className="cocktails-page">
        {loading && <p>Loading...</p>}

        {cocktails.length ? (
          <>
            {cocktails.map((cocktail) => {
              return (
                <Link
                  key={cocktail._id}
                  to={`/cocktails/${cocktail._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CocktailCard  cocktail={cocktail} />
                </Link>
              );
            })}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
};

export default Cocktails;
