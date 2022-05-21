import { useState, useEffect } from 'react';
import './style.css';
import api from "../../Services/api";
import { Link } from 'react-router-dom';


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

    // async function filterloadLocals(name) {
    //     await api
    //         // .get("/pokemon?limit=19")
    //         .get(`/pokemon/${name}`)
    //         .then((data) => {
    //             console.log(data.data.results);
    //             setPokemonList(data.data.results);

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    
    //Url que iminte a imagem 
    function returnURLImg(url) {
        const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        const newUrl = `${url.slice(34)}`;
        const returnImg = baseUrl + newUrl.replace("/", ".png");
        return returnImg;
    }

    useEffect(() => {
        getPokemonList();
    }, []);


    return (
        <div className='Container'>
            {PokemonList.map((item, index) => {

                return (
                    // <Card item={item} index={index}/>
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
                );
            })}
        </div>
    )
}
// function Card({ item, index }) {
//     return (
//         <div className='ContainerCard' key={index}>
//             <img className='imgCard' src={returnURLImg(item.url)} alt='pokemon' />
//             <h1 >{item.name}</h1>
//             <div className='CardFooter'>
//                 <button>Adicionar</button>
//                 <Link to={`/detalhes/${item.name}`}>
//                     <button>Ver Detalhes</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }

