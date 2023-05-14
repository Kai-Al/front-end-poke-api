import { GenericSelect } from "./GenericSelect";
import PokemonItem from "./PokemonItem";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

export const PokemonGrid = ({ pokemonList }) => {

    
  const [rowLength, setRowLength] = useState(3);

  const pokemonChunks = pokemonList.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / rowLength);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <>
      {pokemonChunks.map((chunk, rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {chunk.map((pokemon) => (
            <Col key={pokemon.name} className="col">
              <PokemonItem
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
              />
            </Col>
          ))}
        </Row>
      ))}
      <Row className="d-flex justify-content-end">
        <GenericSelect
            onNewValue={setRowLength}
            valuesToDisplay={[3, 5, 7]}
        />
      </Row>
    </>
  );
};
