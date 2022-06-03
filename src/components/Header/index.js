import { Link, useNavigate } from 'react-router-dom'
import { PokedexContext, usePokedex } from '../../context';
import { Containerr, Empty, StyleB, StyleList } from './styled.js'

export default function Header({ routeName }) {

    const navigate = useNavigate();

    const navigateToPokedex = (pokemonSelected) => {
        addOrRemovePokemon(pokemonSelected);
        navigate('/pokedex');
    }

    const { pokemonSelected, addOrRemovePokemon } = usePokedex(PokedexContext);
    return (
        <Containerr>
            {routeName === "home" ? (
                <>
                    <StyleList>
                        {/* <Link to='/pokedex'>VER MINHA POKEDEX</Link> */}
                        <h2>LISTA DE POKEMOS</h2>
                        <Empty />
                    </StyleList>
                    <StyleB>
                        <Link to='/pokedex'>VER MINHA POKEDEX</Link>
                        {/* <h2>LISTA DE POKEMOS</h2> */}
                        <Empty />
                    </StyleB>
                </>
            ) : routeName === 'pokedex' ? (
                <>
                    <StyleB>
                        <Link to='/'>VOLTAR</Link>
                        {/* <h2>Seus POKEMOS</h2> */}
                        <Empty />

                    </StyleB>
                    <StyleList>
                        {/* <Link to='/'>VOLTAR</Link> */}
                        <h2>LISTA DE POKEMOS</h2>
                        <Empty />
                    </StyleList>
                </>
            ) : routeName === 'details' ? (
                <>
                    <StyleB>
                        <Link to='/'>VOLTAR</Link>
                        {/* <h2>LISTA DE POKEMOS</h2> */}
                        {/* <button onClick={() => navigateToPokedex(pokemonSelected)}>ADICIONAR/REMOVER DA POKEDEX</button> */}
                    </StyleB>
                    <StyleList>
                        {/* <Link to='/'>VOLTAR</Link> */}
                        <h2>LISTA DE POKEMOS</h2>
                        {/* <button onClick={() => navigateToPokedex(pokemonSelected)}>ADICIONAR/REMOVER DA POKEDEX</button> */}
                    </StyleList>
                    <StyleB>
                        {/* <Link to='/'>VOLTAR</Link> */}
                        {/* <h2>LISTA DE POKEMOS</h2> */}
                        <a onClick={() => navigateToPokedex(pokemonSelected)}>ADICIONAR/REMOVER DA POKEDEX</a>
                    </StyleB></>
            ) : (
                <></>
            )}
        </Containerr>
    )

}