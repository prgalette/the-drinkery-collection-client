import { createContext, useEffect, useState  } from "react";
import { get } from "../services/authService";



const CocktailContext = createContext();

const CocktailProvider =({ children }) => {

    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCocktails = () => {
        get("/cocktails")
          .then((response) => {
            console.log("Cocktails ===>", response.data);
            setCocktails(response.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }

      useEffect(() => {
    
        getCocktails()
    
    }, [])

    return (
        <CocktailContext.Provider value={{ cocktails, loading, getCocktails, }}>
            {children}
        </CocktailContext.Provider>
      );
};

export { CocktailContext, CocktailProvider }