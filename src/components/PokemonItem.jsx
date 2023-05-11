import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const PokemonItem = ({ name, image, types }) => {
    return (
        <Card style={{ width: '13rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {
                types.map(type => <ListGroup.Item key={name+type}>{type}</ListGroup.Item>)
            }
          </ListGroup>
        </Card>
      );
}

export default PokemonItem;