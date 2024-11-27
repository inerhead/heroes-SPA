import { heroesData } from '../data/heroes';

export const getHeroesByName = ( name = '' ) => {
    if ( name === '' ) {
        return [];
    }
    name = name.toLocaleLowerCase();
    return heroesData.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );
}