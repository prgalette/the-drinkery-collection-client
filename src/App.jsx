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
        <Route path="/details/:cocktailId" element={<CocktailDetails />} />

        <Route element={<IsLoggedOut />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<IsLoggedIn />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
</div>
     
    </>
  );
}

export default App;
