import { heroes } from '../data/heroes'


export const getHeroesByPublisher = ( publisher ) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes( publisher ) ){
        throw new Error(`Publicher "${ publisher }" is not correct`)
    }

    return heroes.filter( heroe => heroe.publisher === publisher);
}