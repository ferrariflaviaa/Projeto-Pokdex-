import { useState, useEffect, useContext } from 'react';
import { PageContainer, ContainerLP, ButtonT, ContePages } from './style.js';
import api from "../../Services/api";
import Card from '../Card';
import Header from '../Header';
import { usePokedex, PokedexContext } from '../../context';

export default function ListPokemons() {

    const [PokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);
    const { pokemons, addPokemon } = usePokedex(PokedexContext);
    const [totalPokemons, setTotalPokemons] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const capturePokemon = (item) => {
        addPokemon(item);
    }

    const nextPage = (valor) => {
        if (valor * 30 > offset) {
            setOffset(valor * 30);
            setPage(valor + 1);
        }
        else if (page > 0 && valor * 30 !== offset) {
            setOffset(valor * 30);
            setPage(valor + 1);
        }
    }


    useEffect(() => {
        console.log("ofsset:" + offset)
        console.log("page:" + page)
    }, [page]);


    async function getPokemonList() {
        await api
            .get(`/pokemon?offset=${offset}&limit=30`)
            .then((data) => {
                setPokemonList(data.data.results);
                setTotalPokemons(data.data.count);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getPokemonList();
    }, [offset]);

    useEffect(() => {
        console.log(pokemons)
    }, [pokemons]);

    useEffect(() => {
        if (totalPokemons) {
            setTotalPages(Math.ceil(totalPokemons / 30));
        }
    }, [totalPokemons]);

    const validPokemonIntoPokedex = (item, index) => {
        for (let i = 0; i <= pokemons.length - 1; i++) {
            if (item.name === pokemons[i].name) {
                return false;
            }
        }
        return <Card item={item} key={index} routeName='home' action={() => capturePokemon(item)} />
    }



    return (
        <>
            <Header routeName='home' />
            <ContePages>
                {totalPages && (
                    Array.from({ length: totalPages }).map((_, index) => (
                        <ButtonT key={index} onClick={() => nextPage(index)} >{index + 1}</ButtonT>
                    ))
                )}
            </ContePages>
            <PageContainer>
                <h1>{page}</h1>
            </PageContainer>
            <ContainerLP>
                {PokemonList.map((item, index) => {
                    return validPokemonIntoPokedex(item, index);
                })}
            </ContainerLP>
        </>

    )
}


