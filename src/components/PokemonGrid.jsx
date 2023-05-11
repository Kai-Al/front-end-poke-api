import { useEffect, useState } from "react"
import { getAllPokemon, getPokemon } from "../helpers/getPokemons"
import PokemonItem from "./PokemonItem"

export const PokemonGrid = ({ pokemon }) => {

    const [pokemonList, setPokemonList] = useState([])

    const getPokemonList = async () => {
        await getAllPokemon().then(newPokemonList => {
            setPokemonList(newPokemonList)
        })
    }

    useEffect(() => {
        getPokemonList(pokemon);
    }, [pokemon])


    return (
        <>
            <h1>{pokemon}</h1>
                {
                    pokemonList.map(pokemon => {
                        return <PokemonItem key={pokemon.name}
                            title={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types}
                      />
                    })

                }
        </>
    )
}
