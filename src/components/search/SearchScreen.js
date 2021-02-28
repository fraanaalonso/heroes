import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    //get location

    const location = useLocation();

    const {q = ''} = queryString.parse(location.search); //equal to a string to avoid undefined

    const [ formValues, handleInputChange ] = useForm( {
        searchText: q
    });

    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]); //the state change when the query has changed
    

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
        
    }
    return (
        <div>
            <h1>Search Screen</h1>

            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Find your heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange= {handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                                Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>

                    <hr />

                    {
                        (q==='')
                        &&
                        <div className="alert alert-info">
                            Search a Heroe
                        </div>
                    }

                    {
                        (q!=='' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            No results for { q }
                        </div>
                    }

                    
                    {
                        heroesFiltered.map( heroe => (
                            <HeroeCard 

                                key ={ heroe.id}
                                {...heroe}
                            
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
