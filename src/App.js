import React from "react"

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

function App() {
  const cardData = data.map(x => 
    <Card 
      key={x.id}
      img={x.coverImg}
      rating = {x.stats.rating}
      reviewCount = {x.stats.reviewCount}
      country={x.location}
      title = {x.title}
      price = {x.price}
      openSpots = {x.openSpots}
    />
    )
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="card-list">
        {cardData}
      </section>
    </div>
  );
}

export default App;
