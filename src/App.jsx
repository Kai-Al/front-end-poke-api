import { useState } from "react"
import { PokemonInput } from "./components/PokemonInput";
import { PokemonGrid } from "./components/PokemonGrid";

function App() {

  const [pokemon, setPokemon] = useState("");

  return (
    <>
      <h1>PokéAPI</h1>

      <PokemonInput 
        onNewValue={setPokemon}
      />

      <PokemonGrid 
        pokemon={pokemon}
      />
    </>
  )
}

export default App
