import React from 'react'
import './styled.css';
import { Link } from 'react-router-dom';

export default function Card({ action, routeName, item, addPokemon,...rest }) {

    //Url que iminte a imagem 
    function returnURLImg(url) {
        const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        const newUrl = `${url.slice(34)}`;
        const returnImg = baseUrl + newUrl.replace("/", ".png");
        return returnImg;
    }

    return (
            <div className='ContainerCard'  {...rest}>
                <img className='imgCard' src={returnURLImg(item.url)} alt='pokemon' />
                <h1 >{item.name}</h1>
                <div className='CardFooter'>
                    {routeName === 'home' ? (
                        <button onClick={()=>action(item)}>Adicionar</button>
                        ) : (
                        <button>Remover</button>
                    )}
                    <Link to={`/detalhes/${item.name}`}>
                        <button>Ver Detalhes</button>
                    </Link>
                </div>
            </div>
    )
}