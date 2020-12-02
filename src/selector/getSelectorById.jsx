

import {heroes} from '../data/DataHero'

 export const getSelectorById = (id) => {

 

   const data = heroes.find(hero => hero.id===id)

  

    return data



}


