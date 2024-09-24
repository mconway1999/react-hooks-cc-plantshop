import React from "react";
import { useState } from "react";

function PlantCard({plant}) {

const[displayStock, setDisplayStock]= useState(true)

function toggleDisplayStock(){
  setDisplayStock(!displayStock)
}

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {displayStock? (
        <button onClick={toggleDisplayStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleDisplayStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
