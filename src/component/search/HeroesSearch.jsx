import React from 'react'
import { heroes } from '../../data/DataHero';


const HeroesSearch = (props) => {

   const hero = props.match.params.item;

   const heroesData = heroes;

   const heroeFiltrado = heroesData.filter(item=> item.superhero === hero)

   const her = heroeFiltrado[0]
 
   
  

   const onReturn = () => {
   
    props.history.replace('/')
}
   return (
     <div className="row  card-columns m-4">
       <div className=" col-4 card">
         <img src={`/assets/heroes/${her.id}.jpg`} className="card-img-top" alt="..." />
      
       </div>
       <div className=" card-body" >
           <h5 className="card-title">{her.alter_ego}</h5>
           <p className="card-text">
             { her.first_appearance}
           </p>

           <button className="btn btn-dark" onClick={()=>onReturn()}>Volver</button>
         </div>
     </div>
   );

}

export default HeroesSearch
