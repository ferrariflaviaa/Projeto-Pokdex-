import { useState, useEffect } from 'react';
import './style.css';
import api from "../../Services/api";
import Card from '../Card';
import Header from '../Header';


export default function ListPokemons() {

    const [PokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);

    const nextPage = () => {
        if (offset >= 1110) {
            setOffset(0);
        }else{
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
        console.log(offset)
    }, [offset]);


    return (
        <>
            <Header routeName='home' />
            <div className='ContainerPage'>
                <button onClick={() => previusPage()}>Página anterior</button>
                <button onClick={() => nextPage()}>Página seguinte</button>
            </div>
            <div className='Container'>
                {PokemonList.map((item, index) => {
                    return (
                        <Card item={item} key={index} />
                    );
                })}
            </div>
        </>

    )
}


