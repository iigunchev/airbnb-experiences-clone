import React from 'react'
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"
import "./index.css"

function App() {
  const newData = data.map(item =>
    <Card 
    img = {item.coverImg}
    rating = {item.stats.rating}
    reviewCount = {item.stats.reviewCount}
    location = {item.location}
    title = {item.title}
    price = {item.price}
    />)
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="card-container">
        {newData}
      </div>
    </div>
  )
}

export default App;
