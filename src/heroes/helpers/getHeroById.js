import { heroesData } from '../'

export const getHeroById = ( id ) => {
    return heroesData.find( hero => hero.id === id );
}