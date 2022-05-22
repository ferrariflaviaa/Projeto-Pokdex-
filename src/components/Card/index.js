import React from 'react'
import './styled.css';
import { Link } from 'react-router-dom';

export default function Card({ item, index }) {

    //Url que iminte a imagem 
    function returnURLImg(url) {
        const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        const newUrl = `${url.slice(34)}`;
        const returnImg = baseUrl + newUrl.replace("/", ".png");
        return returnImg;
    }

    return (
        <div className='Container'>
            <div className='ContainerCard' key={index}>
                <img className='imgCard' src={returnURLImg(item.url)} alt='pokemon' />
                <h1 >{item.name}</h1>
                <div className='CardFooter'>
                    <button>Adicionar</button>
                    <Link to={`/detalhes/${item.name}`}>
                        <button>Ver Detalhes</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}