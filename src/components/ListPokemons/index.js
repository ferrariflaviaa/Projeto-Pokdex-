import { useState, useEffect } from 'react';
import './style.css';
import api from "../../Services/api";
import Card from '../Card';
import Header from '../Header';


export default function ListPokemons() {

    const [PokemonList, setPokemonList] = useState([]);


    async function getPokemonList() {
        await api
            // .get("/pokemon?limit=19")
            .get("/pokemon")
            .then((data) => {
                console.log(data.data.results);
                setPokemonList(data.data.results);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getPokemonList();
    }, []);


    return (
        <>
            <Header />
            <div className='Container'>
                {PokemonList.map((item, index) => {
                    return (
                        <Card item={item} index={index} />
                    );
                })}
            </div>
        </>

    )
}


