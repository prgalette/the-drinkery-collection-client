import { createContext, useEffect, useState  } from "react";
import { get } from "../services/authService";



const CocktailContext = createContext();

const CocktailProvider =({ children }) => {

    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCocktails = () => {
        get("/cocktails")
          .then((response) => {
            // Security: avoid logging complete API responses because they may contain user data.
            setCocktails(
  [...response.data].sort((a, b) => a.name.localeCompare(b.name)),
);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }

    const updateCocktail = (updatedCocktail) => {

      setCocktails((currentCocktails) =>
        currentCocktails.map((cocktail) =>
          cocktail._id === updatedCocktail._id
            ? updatedCocktail
            : cocktail
    )
  );
};

    const removeCocktail = (cocktailId) => {
      setCocktails((currentCocktails) =>
        currentCocktails.filter(
          (cocktail) => cocktail._id !== cocktailId
    )
  );
};

      useEffect(() => {
    
        getCocktails()
    
    }, [])

    return (
        <CocktailContext.Provider
          value={{
            cocktails,
            loading,
            getCocktails,
            updateCocktail,
            removeCocktail,
  }}
>
            {children}
        </CocktailContext.Provider>
      );
};

export { CocktailContext, CocktailProvider }