import { Link } from 'react-router-dom'
import { PokedexContext, usePokedex } from '../../context';
import './styled.css'

export default function Header({ routeName }) {

    const { pokemonSelected, addOrRemovePokemon } = usePokedex(PokedexContext);
    return (
        <div className="container">
            {routeName === "home" ? (
                <>
                    <Link className='styleB' to='/pokedex'>VER MINHA POKEDEX</Link>
                    <h2>LISTA DE POKEMOS</h2>
                    <div className='empty' />
                </>
            ) : routeName === 'pokedex' ? (
                <>
                    <Link className='styleB' to='/'>VOLTAR</Link>
                    <h2>LISTA DE POKEMOS</h2>
                    <div className='empty' />
                </>
            ) : routeName === 'details' ? (
                <>
                    <Link className='styleB' to='/' >VOLTAR</Link>
                    <h2>LISTA DE POKEMOS</h2>
                    <button className='styleB' onClick={()=>addOrRemovePokemon(pokemonSelected)}>ADICIONAR/REMOVER DA POKEDEX</button>
                </>
            ) : (
                <></>
            )}
        </div>
    )

}