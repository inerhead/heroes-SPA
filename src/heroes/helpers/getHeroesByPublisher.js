import { heroesData } from '../'

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics']
    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`)
    }
    return heroesData.filter(hero => hero.publisher === publisher)
    }
