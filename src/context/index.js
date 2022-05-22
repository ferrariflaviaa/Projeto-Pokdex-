import React, {
    useState,
    useContext,
    createContext
} from 'react';

export const PokedexContext = createContext({});

function PokedexProvider({ children }) {

    const [pokemons, setPokemons] = useState([
        // {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
        // {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
    ]);

    const addPokemon = (item) => {
        setPokemons([...pokemons, item])
    }

    return (
        <PokedexContext.Provider value={{ pokemons, addPokemon }}>
            {children}
        </PokedexContext.Provider>
    )
}

function usePokedex() {
    const context = useContext(PokedexContext);
    return context;
}

export { PokedexProvider, usePokedex };