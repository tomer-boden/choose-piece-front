import Logo from "./components/Logo/Logo";
import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import InputBox from "./components/InputBox/InputBox";
import Particles from "react-tsparticles";

function App() {
  const [route, setRoute] = useState("SignIn");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    joined: "",
  });

  useEffect(() => {
    setRoute(localStorage.getItem("route"));
    setIsSignedIn(localStorage.getItem("isSignedIn"));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    localStorage.setItem("route", route);
    localStorage.setItem("isSignedIN", isSignedIn);
    localStorage.setItem("user", JSON.stringify(user));
  }, [route, isSignedIn, user]);

  const loadUser = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      joined: user.joined,
    });
  };

  const onRouteChange = (route) => {
    if (route === "SignOut") {
      setIsSignedIn(false);
    } else {
      if (route === "home") {
        setIsSignedIn(true);
      }
    }
    setRoute(route);
  };

  return (
    <div className="App">
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {true ? (
        <div>
          <Logo />
          <InputBox />
        </div>
      ) : route === "SignIn" || route === "SignOut" ? (
        <SignIn onRouteChange={onRouteChange} loadUser={loadUser} />
      ) : (
        <Register onRouteChange={onRouteChange} loadUser={loadUser} />
      )}
    </div>
  );
}

export default App;
