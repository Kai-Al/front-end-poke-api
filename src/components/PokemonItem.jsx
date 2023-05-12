import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const PokemonItem = ({ name, image, types }) => {
  return (
    <Card style={{ width: "10rem" }}>
      <Card.Body>
        <Card.Title className="text-center text-capitalize">{name}</Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={image} />
      <ListGroup className="list-group-flush ">
        {types.map((type) => (
          <ListGroup.Item
            key={name + type}
            className="text-center text-capitalize"
          >
            {type}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default PokemonItem;
