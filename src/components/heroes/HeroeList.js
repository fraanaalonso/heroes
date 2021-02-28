import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublicher'
import { HeroeCard } from './HeroeCard'

export const HeroeList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])

    //const heroes = getHeroesByPublisher( publisher )
    return (
        <div className=" card-columns animate__animated animate__fadeIn">
            {
                heroes.map( heroe => (
                    <HeroeCard key={ heroe.id }
                        {...heroe}>
                    </HeroeCard>
                ))
            }
        </div>
    )
}
