import React from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import data from "./data";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <section>
        <Hero />
      </section>
      <section className="cards">
        {data.map((trainer) => {
          return (
            <Card
              id={trainer.id}
              item={trainer}
              // img={trainer.coverImg}
              // rating={trainer.stats.rating}
              // reviewCount={trainer.stats.reviewCount}
              // location={trainer.location}
              // title={trainer.title}
              // price={trainer.price}
              // openSpots={trainer.openSpots}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
