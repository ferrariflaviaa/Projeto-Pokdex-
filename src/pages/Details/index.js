import { useState, useEffect } from 'react'
import Header from '../../components/Header/index';
// import '../../components/Header/styled.css';
import './styled.css';
import api from "../../Services/api";

import { useParams } from "react-router-dom";
import { PokedexContext, usePokedex } from '../../context';

export default function Detalis() {

  const [pokemonDetails, setPokemonDetails] = useState();
  const params = useParams();
  const pokemonId = params.id;
  const { setPokemonSelected } = usePokedex(PokedexContext);

  async function getPokemonDetalis() {
    await api
      .get(`/pokemon/${pokemonId}`)
      .then((data) => {
        // console.log(data.data);
        setPokemonDetails(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getPokemonDetalis();
  }, []);

  useEffect(() => {
    if(pokemonDetails){
      setPokemonSelected({
        name: pokemonId,
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonDetails.id}/`,
      });
    }
  }, [pokemonDetails]);

  return (
    <div>
      <Header routeName='details' />

      {pokemonDetails && (
        <>
          <div className='containerDetalis'>
            <img className='imgPokemon' src={pokemonDetails.sprites.front_default} />
            <img className='imgPokemon' src={pokemonDetails.sprites.back_default} />
          </div>
          <div>
            <h1>HP: {pokemonDetails.stats[0].base_stat}</h1>
            <h1>Atack: {pokemonDetails.stats[1].base_stat}</h1>
            <h1>Defense: {pokemonDetails.stats[2].base_stat}</h1>
            <h1>special-attack: {pokemonDetails.stats[3].base_stat}</h1>
            <h1>special-defense: {pokemonDetails.stats[4].base_stat}</h1>
            <h1>speed: {pokemonDetails.stats[5].base_stat}</h1>
          </div>
          {pokemonDetails.types.map((item, index) => {
            return (
              <h1 key={index}>type {index + 1}: {item.type.name}</h1>
            )
          })}
          <div>
            <h1>Moves</h1>
            {pokemonDetails.moves.map((item, index) => {
              return <h1 key={index}>{index + 1}: {item.move.name} </h1>
            })}
          </div>
        </>
      )}
    </div>
  )
}
