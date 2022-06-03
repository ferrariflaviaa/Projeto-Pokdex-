import React from 'react'
import {ContainerCard, Img, CardFooter} from './styled.js';
import { Link } from 'react-router-dom';

export default function CardPokedex({ action, routeName, item, battle,...rest }) {

    //Url que iminte a imagem 
    function returnURLImg(url) {
        const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        const newUrl = `${url.slice(34)}`;
        const returnImg = baseUrl + newUrl.replace("/", ".png");
        return returnImg; 
    }

    return (
        <ContainerCard  {...rest} >
            <Link to={`/detalhes/${item.name}`}>
                <Img src={returnURLImg(item.url)} alt='pokemon' />
            </Link>

            <h1>{item.name}</h1>
            <CardFooter>
                {routeName === 'home' ? (
                    <button onClick={() => action(item)}>Add</button>
                ) : (
                    <button onClick={() => action(item)}>To remove</button>
                )}
                <Link to={`/detalhes/${item.name}`}>
                    <button>See details</button>
                </Link>
                
                <button onClick={() => battle() } >To battle</button>
                
            </CardFooter>
        </ContainerCard>
    )
}