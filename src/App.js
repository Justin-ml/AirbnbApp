import React from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <section>
        <Hero />
      </section>
      <Card />
    </div>
  );
}

export default App;
