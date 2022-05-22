import React, {
    useState,
    useEffect,
    useContext,
    createContext,
} from 'react';

export const PokedexContext = createContext({});

function PokedexProvider({ children }) {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsPaged, setPokemonsPaged] = useState([]);
    const [offeset, setOffeset] = useState(30);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setPokemonsPaged(pokemons);
    }, [pokemons])

    const removePokemon = (item) => {
        const filterPokemons = pokemons.filter(pokemon => pokemon.name !== item.name);
        setPokemonsPaged(filterPokemons);
        setPokemons(filterPokemons);
    }

    const addPokemon = (item) => {
        setPokemons([...pokemons, item])
    }

    return (
        <PokedexContext.Provider
            value={{
                pokemons,
                addPokemon,
                removePokemon,
                pokemonsPaged,
            }}>
            {children}
        </PokedexContext.Provider>
    )
}

function usePokedex() {
    const context = useContext(PokedexContext);
    return context;
}

export { PokedexProvider, usePokedex };