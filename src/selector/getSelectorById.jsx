

import {heroes} from '../data/DataHero'

 export const getSelectorById = (id) => {

    console.log(heroes);

   const data = heroes.find(hero => hero.id===id)

  

    return data



}


