import PokemonItem from "./PokemonItem"
import { Row, Col, Button } from "react-bootstrap";

export const PokemonGrid = ({ pokemonList , rowLength}) => {


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
            {
                pokemonChunks.map((chunk, rowIndex) => (
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
                ))
            }
        </>

    );
}
