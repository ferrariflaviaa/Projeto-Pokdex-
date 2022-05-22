import React from 'react'
import './styled.css';
import { usePokedex, PokedexContext } from '../../context';
import Header from '../../components/Header';
import Card from '../../components/Card';


export default function ListPokedex() {

    const { pokemonsPaged, addPokemon, removePokemon } = usePokedex(PokedexContext);

    return (
        <>
            <Header routeName="pokedex" />
            <div className='ContainerPage'>
                <button onClick={() => null}>PREVIUS PAGE</button>
                <button onClick={() => null}>NEXT PAGE</button>
            </div>
            {pokemonsPaged && (
                <div className='Container'>
                    {pokemonsPaged.map((item, index) => {
                        return <Card item={item} key={index} action={()=> removePokemon(item)}/>
                    })}

                </div>

            )}

        </>
    )
}
