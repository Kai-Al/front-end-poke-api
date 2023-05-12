import { PokemonInput } from "./components/PokemonInput";
import { PokemonGrid } from "./components/PokemonGrid";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GenericSelect } from "./components/GenericSelect";
import { OffsetButtons } from "./components/OffsetButons";
import { searchByName } from "./helpers/getPokemons";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [rowLength, setRowLength] = useState(3);
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
        <Col>
          <PokemonInput onNewValue={setPokemonName} />
        </Col>
        <Col style={{ width: "100%" }}>
          <GenericSelect
            onNewValue={setRowLength}
            valuesToDisplay={[3, 5, 7]}
          />
        </Col>
      </Row>
      <PokemonGrid pokemonList={pokemonList} rowLength={rowLength} />
      <OffsetButtons onNewOffset={setOffset} />
    </Container>
  );
}

export default App;
