import React, { useState } from "react";
import Routes from "../src/components/Routes";
import SideNavigation from "./components/sideNavigation";
import "./index.css";
import Signin from "./components/Signin";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignin = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    setLoggedIn(false);
  };

  return (
    <div className="flexible-content">
      {loggedIn ? (
        <>
          <SideNavigation />
          <main id="content" className="p-5">
            <Routes signOut={handleSignOut} />
          </main>
        </>
      ) : (
        <Signin signin={handleSignin} />
      )}
    </div>
  );
};

export default App;
