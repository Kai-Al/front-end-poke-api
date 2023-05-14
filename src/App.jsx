import { PokemonInput } from "./components/PokemonInput";
import { PokemonGrid } from "./components/PokemonGrid";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { OffsetButtons } from "./components/OffsetButons";
import { searchByName } from "./helpers/getPokemons";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  const getPokemonList = async (pokemonName) => {
    await searchByName(pokemonName, offset).then((newPokemonList) => {
      setPokemonList(newPokemonList);
    });
  };

  useEffect(() => {
    getPokemonList(pokemonName);
  }, [pokemonName, offset]);

  return (
    <Container style={{ paddingBottom: "3rem" }}>
      <h1 style={{ textAlign: "center" }}>PokéAPI</h1>
      <Row className="mb-4 mt-1">
          <PokemonInput onNewValue={setPokemonName} />
      </Row>
      <PokemonGrid pokemonList={pokemonList} />
      <OffsetButtons onNewOffset={setOffset} />
    </Container>
  );
}

export default App;
