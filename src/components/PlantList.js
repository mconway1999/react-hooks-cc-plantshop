import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantCompnents = plants.map(plant => {
  return <PlantCard key = {plant.id} plant={plant}/>
  })
  
  
    return (
    <ul className="cards">{plantCompnents}</ul>
  
);
}
export default PlantList;
