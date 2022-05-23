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
    const [filterStart, setFilterStart] = useState(0);
    const [filterEnd, setFilterEnd] = useState(30);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPokemonsPaged([]);
        setPokemonsPaged(pokemons.slice(filterStart, filterEnd));
    }, [pokemons, page])

    const nextPage = () => {
        if (page !== (Math.ceil(pokemons.length / 30))) {
            setPage(page + 1);
            setFilterStart(filterStart + 30);
            setFilterEnd(filterEnd + 30);
        }

    }

    const previusPage = () => {
        if (filterStart > 0) {
            setPage(page - 1);
            setFilterStart(filterStart - 30);
            setFilterEnd(filterEnd - 30);
        }
    }

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
                nextPage,
                previusPage
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