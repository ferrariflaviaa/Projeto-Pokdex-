import React, {  useSate, createContext, useContext, } from "react";

export const PokedexContext = createContext();

function PokedexProvider({children}){

    const [listPokedex, setListPokedex] = useSate([]);

    const addPokemonToPokedex  = (item) => {
        setListPokedex([...listPokedex, item]);
    };

    return(
        <PokedexContext.Provider value={{
            addPokemonToPokedex,
            listPokedex,
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