import React from 'react'
import { Link } from 'react-router-dom';




const Card = ({
  
    id,
    alter_ego,
    characters,
    first_appearance,
    publisher,
    superhero

}) => {



    const path = (id) => {
    return `/assets/heroes/${id}.jpg`;
  };



    return (
      <div className="row row-cols-1 row-cols-md-2 mb-3" style={{maxWidth:300}}>

        <Link to={`/heroe/${id}`}>
        <img src={path(id)} className="card-img-top" alt={superhero} />
        </Link>
       
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{first_appearance}</p>
        </div>
      </div>
    );
}

export default Card
