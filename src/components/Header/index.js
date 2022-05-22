import { Link } from 'react-router-dom'
import './styled.css'

export default function Header({ routeName }) {


    return (
        <div className="container">
            {routeName === "home" ? (
                <>
                    <button className='styleB'>VER MINHA POKEDEX</button>
                    <h2>LISTA DE POKEMOS</h2>
                    <div className='empty' />
                </>
            ) : routeName === 'pokedex' ? (
                <>
                    <button className='styleB'>VER MINHA POKEDEX</button>
                    <h2>LISTA DE POKEMOS</h2>
                    <div className='empty' />
                </>
            ) : routeName === 'details' ? (
                <>
                    <Link className='styleB' to='/' >VOLTAR</Link>
                    <h2>LISTA DE POKEMOS</h2>
                    <button className='styleB'>ADICIONAR/REMOVER DA POKEDEX</button>
                </>
            ) : (
                <></>
            )}
        </div>
    )

}