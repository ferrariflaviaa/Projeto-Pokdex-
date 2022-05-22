import React from 'react'
import './styled.css';
import { usePokedex, PokedexContext } from '../../context';
import Header from '../../components/Header';
import Card from '../../components/Card';


export default function ListPokedex() {

    const { pokemons, addPokemon } = usePokedex(PokedexContext);

    return (
        <>
            <Header routeName="pokedex" />
            {pokemons && (
                <div className='Container'>
                    {pokemons.map((item, index) => {
                        return <Card item={item} key={index}/>
                    })}

                </div>

            )}

        </>
    )
}
