import React from "react";
import { getSelectorByPublisher } from "../../selector/getSelectorByPublisher";
import Card from "./Card";
// import "./hero.css";

const HeroList = ({ publisher }) => {
  const data = getSelectorByPublisher(publisher);
  
  return (
    <div className="card-columns m-5 ">
      
        {data.map(item=>(
             <Card
             key={item.id}
             {...item}
             />
        ))}
      
    </div>
  );
};

export default HeroList;
