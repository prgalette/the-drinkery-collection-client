import "./App.css";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Cocktails from "./pages/Cocktails";
import CocktailDetails from "./pages/CocktailDetails";
import About from "./pages/About";
import AddCocktail from "./pages/AddCocktail";
import EditCocktail from "./pages/EditCocktail";
import EditMyCocktail from "./pages/EditMyCocktail";

import AddReview from "./pages/AddReview";
import Reviews from "./pages/Reviews";
import EditMyReview from "./pages/EditMyReview";


function App() {
  const { getToken } = useContext(AuthContext);

  const IsLoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const IsLoggedOut = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <>
      <NavBar />
      <br />
<div style={{ backgroundColor: "rgb(176, 174, 189)"}}>

   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:cocktailId" element={<CocktailDetails />} />
        <Route path="/about" element={<About />} />

        <Route element={<IsLoggedOut />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<IsLoggedIn />}>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/new-cocktail" element={<AddCocktail />} />
          <Route path="/cocktails/edit/:cocktailId" element={<EditCocktail />} />
          <Route path="/my-cocktail/edit/:cocktailId" element={<EditMyCocktail />} />
          <Route path="/new-review/:cocktailId" element={<AddReview />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/my-review/edit/:reviewId" element={<EditMyReview />}
/>        </Route>
      </Routes>
</div>
     
    </>
  );
}

export default App;
