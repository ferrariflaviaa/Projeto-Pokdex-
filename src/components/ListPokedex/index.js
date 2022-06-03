import React, { useState } from 'react'
import {ContainerPage, Container, ButtonT} from './styled.js';
import { usePokedex, PokedexContext } from '../../context';
import Header from '../../components/Header';
import CardPokedex from '../../components/CardPokedex';
import api from '../../Services/api';


export default function ListPokedex() {

    const { pokemonsPaged, removePokemon, previusPage, nextPage, page } = usePokedex(PokedexContext);

    const [firstSelected, setFirstSelected] = useState({ name: '' });
    const [secondSelected, setSecondSelected] = useState({ name: '' });

    const getPokemonStats = async (name) => {
        const statsPokemon = await api
            .get(`/pokemon/${name}`);

        return statsPokemon;
    }

    const validStrongPokemon = async () => {
        if (firstSelected.name !== '' && secondSelected.name !== '') {
            const first = await getPokemonStats(firstSelected.name);
            const second = await getPokemonStats(secondSelected.name);
            console.log("first", first);
            console.log("second", second);
            if(
                first.data.stats[0].base_stat + 
                first.data.stats[1].base_stat + 
                first.data.stats[2].base_stat + 
                first.data.stats[3].base_stat + 
                first.data.stats[4].base_stat +
                first.data.stats[5].base_stat >  
                second.data.stats[0].base_stat + 
                second.data.stats[1].base_stat +
                second.data.stats[2].base_stat +
                second.data.stats[3].base_stat +
                second.data.stats[4].base_stat +
                second.data.stats[5].base_stat){
                alert(`O POKEMON ${firstSelected.name} É MAIS FORTE QUE ${secondSelected.name}`)
                setFirstSelected({ name: '' });
                setSecondSelected({ name: '' });
            }else{
                alert(`O POKEMON ${secondSelected.name} É MAIS FORTE QUE ${firstSelected.name}`)
                setFirstSelected({ name: '' });
                setSecondSelected({ name: '' });

            }
        }
    }

    const selectPokemon = (item) => {
        if(firstSelected.name === item.name){
            setFirstSelected({ name: '' });
        }
        if(secondSelected.name === item.name){
            setSecondSelected({ name: '' });
        }
        if (firstSelected.name === '' && firstSelected !== item) {
            setFirstSelected(item);
            console.log(item.name)
        }
        if (firstSelected.name !== '' && secondSelected.name === '' && item.name !== firstSelected.name) {
            console.log("second", item.name)
            setSecondSelected(item);
        }

    }




    const renderCard = (item, index) => {
        if (item.name === firstSelected.name
            || item.name === secondSelected.name) {
            return (
                <CardPokedex item={item} key={index} action={() => removePokemon(item)} battle={() => selectPokemon(item)} style={{
                    borderColor: 'red',
                    borderWidth: 20,
                    backgroundColor: 'red'
                }} />
            )
        } else {
            return (
                <CardPokedex item={item} key={index} action={() => removePokemon(item)} battle={() => selectPokemon(item)} />
            )
        }
    }
    return (
        <>
            <Header routeName="pokedex" />
            <ContainerPage> 
                <h1>{page}</h1>
                <ButtonT onClick={() => previusPage()}>PREVIUS PAGE</ButtonT>
                <ButtonT onClick={() => nextPage()}>NEXT PAGE</ButtonT>
                <ButtonT onClick={() => validStrongPokemon()}
                    style={{
                        backgroundColor: 'blue'
                    }}> ANALYZE POKEMONS
                </ButtonT>
            </ContainerPage>
            {pokemonsPaged && (
                <Container>
                    {pokemonsPaged.map((item, index) => {
                        return renderCard(item, index)
                    })}

                </Container>

            )}

        </>
    )
}
