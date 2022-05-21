import { useState, useEffect } from 'react';
import './style.css';
import api from "../../Services/api";
import apiImg from "../../Services/apiImg";
import pikachu from './../../img/Pikachu.jpg'


export default function Card() {

    const [PokemonList, setPokemonList] = useState([]);


    async function getPokemonList() {
        await api
            .get("/pokemon")
            .then((data) => {
                // console.log(data.data.results);
                setPokemonList(data.data.results);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    //Url que iminte a imagem 
    function returnURLImg(url) {
        const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        const newUrl = `${url.slice(34)}`;
        const returnImg = baseUrl + newUrl.replace("/", ".png");
        return returnImg;
    }

    useEffect(() => {
        getPokemonList();
        returnURLImg("https://pokeapi.co/api/v2/pokemon/1000/");
    }, []);


    return (
        <div className='containerCard'>
            <div className='column'>
                {PokemonList.map((item, index) => {
                    return (
                        <div className='styledCard' key={index}>
                            <img className='imgCard' src={returnURLImg(item.url)} alt='pokemon' />

                            <h1 className='nameTitulo'>{item.name}</h1>
                            <div className='containerBottom'>
                                <div className='bottomCard'>
                                    <bottom className='adicionarCard'>Adicionar</bottom><br />
                                </div>

                                <div className='bottomCard'>
                                    <bottom className='detalherCard'>Ver Detalher</bottom>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}