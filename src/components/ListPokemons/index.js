import { useState, useEffect, useContext } from 'react';
import './style.css';
import api from "../../Services/api";
import Card from '../Card';
import Header from '../Header';
import { usePokedex, PokedexContext } from '../../context';

export default function ListPokemons() {

    const [PokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const { pokemons, addPokemon } = usePokedex(PokedexContext);

    const capturePokemon = (item) => {
        addPokemon(item);
    }

    const nextPage = () => {
        if (offset >= 1110) {
            setOffset(0);
        } else {
            setOffset(offset + 30);
        }
    }

    const previusPage = () => {
        if (offset === 0) {
            setOffset(1110);
        } else {
            setOffset(offset - 30);
        }
    }

    async function getPokemonList() {
        await api
            // .get("/pokemon?limit=19")
            .get(`/pokemon?offset=${offset}&limit=30`)
            .then((data) => {
                // console.log(data.data.results);
                setPokemonList(data.data.results);

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
            <div className='ContainerPage'>
                <button onClick={() => previusPage()}>PREVIUS PAGE</button>
                <button onClick={() => nextPage()}>NEXT PAGE</button>
            </div>
            <div className='Container'>
                {PokemonList.map((item, index) => {
                    return validPokemonIntoPokedex(item, index);
                })}
            </div>
        </>

    )
}


