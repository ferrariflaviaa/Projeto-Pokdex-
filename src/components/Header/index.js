import { Link, useNavigate } from 'react-router-dom'
import { PokedexContext, usePokedex } from '../../context';
import { Containerr, Empty, StyleB, StyleList, LinkTo } from './styled.js'

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
                    <Empty />
                    <StyleList>
                        <h2>POKEMON LIST</h2>
                    </StyleList>
                    <StyleB>
                        <LinkTo to='/pokedex'>SEE MY POKEDEX</LinkTo>
                    </StyleB>
                </>
            ) : routeName === 'pokedex' ? (
                <>
                    <StyleB>
                        <LinkTo to='/'>COME BACK</LinkTo>
                    </StyleB>
                    <StyleList>
                        <h2>MY POKEMONS</h2>
                    </StyleList>
                    <Empty />
                </>
            ) : routeName === 'details' ? (
                <>
                    <StyleB>
                        <LinkTo to='/'>COME BACK</LinkTo>
                    </StyleB>
                    <StyleList>
                        <h2>POKEMON DETAILS</h2>
                    </StyleList>
                    <StyleB>
                        <a onClick={() => navigateToPokedex(pokemonSelected)}>ADD/REMOVE FROM POKEDEX</a>
                    </StyleB>
                </>
            ) : (
                <></>
            )}
        </Containerr>
    )

}