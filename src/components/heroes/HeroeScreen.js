import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroeById';


export const HeroeScreen = ({history}) => {

    const {heroeId} = useParams();
    const heroe = useMemo(() => getHeroesById( heroeId ), [heroeId])
    
    //const heroe = getHeroesById( heroeId );

    //I validate if the arg I received through the URL is correct or not
    //If no I redirect the user to the main page
    if ( !heroe ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if( history.length <= 2){
            history.push('/');
        }
        else{
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;

    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ `../assets/heroes/${ heroeId}.jpg` }
                className="img-thumbnail animate__animated animate__fadeInLeft"
                alt={ superhero }
                />
            </div>

            <div className="col-8">
                <h3>{ superhero }</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego: {alter_ego}</b></li>
                    <li className="list-group-item"><b>Publisher: {publisher}</b></li>
                    <li className="list-group-item"><b>First Appearence: {first_appearance}</b></li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
