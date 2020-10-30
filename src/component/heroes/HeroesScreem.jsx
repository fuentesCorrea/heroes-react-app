import React from 'react'

import { Link, Redirect, useParams } from 'react-router-dom';

import { getSelectorById } from '../../selector/getSelectorById';


const HeroesScreem = (props) => {


const {heroeid} = useParams();


const info = getSelectorById(heroeid)

if(!info){
    return <Redirect to="/" />
}

const {alter_ego,
        characters,
        first_appearance,
        publisher,
        superhero} = info



const onReturn = () => {
     console.log(props.history);
     props.history.replace('/')
}



    return (
      <div className="row  card-columns m-4">
        <div className=" col-4 card">
          <img src={`/assets/heroes/${heroeid}.jpg`} className="card-img-top" alt="..." />
       
        </div>
        <div className=" card-body" >
            <h5 className="card-title">{alter_ego}</h5>
            <p className="card-text">
              { first_appearance}
            </p>

            <button className="btn btn-dark" onClick={()=>onReturn()}>Volver</button>
          </div>
      </div>
    );
}

export default HeroesScreem
