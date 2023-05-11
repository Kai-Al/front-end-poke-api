import { PokemonInput } from "./components/PokemonInput";
import { PokemonGrid } from "./components/PokemonGrid";
import { useEffect, useState } from "react"
import { searchPokemon } from "./helpers/getPokemons"
import { Container, Row, Col } from "react-bootstrap";
import { PokemonGridLength } from "./components/PokemonGridLength";
import { OffsetButtons } from "./components/OffsetButons";

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonList, setPokemonList] = useState([])
  const [rowLength, setRowLength] = useState(3)
  const [offset, setOffset] = useState(0)

  const getPokemonList = async (pokemonName) => {
    await searchPokemon(pokemonName,offset).then(newPokemonList => {
      setPokemonList(newPokemonList)
    })
  }

  useEffect(() => {
    getPokemonList(pokemonName, offset);
  }, [pokemonName, offset])

  return (
    <Container style={{ paddingBottom: "3rem" }}>
      <h1 style={{ textAlign: "center" }}>PokéAPI</h1>

      <Row className="mb-4 mt-1">
        <Col >
          <PokemonInput onNewValue={setPokemonName} />
        </Col>
        <Col style={{ width: '100%' }}>
          <PokemonGridLength onNewLength={setRowLength} />
        </Col>
      </Row>


      <PokemonGrid
        pokemonList={pokemonList}
        rowLength={rowLength}
      />

      <OffsetButtons
        onNewOffset={setOffset}
      />
    </Container>
  )
}

export default App
