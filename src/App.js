import "./App.css";
import Navigation from "./components/Navigation";
import Views from "./components/Views";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Views />
    </React.Fragment>
  );
}

export default App;
