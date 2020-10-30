import {heroes} from '../data/DataHero'

 export const getSelectorByPublisher = (publisher) => {

    const publi = ['DC Comics','Marvel Comics']
    

    if(!publi.includes(publisher)){
        throw new Error('no corresponde')
    }

   const array = heroes.filter(hero => hero.publisher===publisher)
 
    
    return  array
    

}

