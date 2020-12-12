import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PetThumbnail = props => {
    return(
      <Card className="m-3 shadow" style={{ width: '27rem', height: '28em', borderRadius:'0.5em'}}>
        <Card.Img variant="top" style={{height: '18em', objectFit: 'cover', borderRadius:'0.5em'}} src={props.image} />
          <Card.Body className="d-flex flex-column">
              <Card.Text className="text-center">
                <b>{props.name}</b>
                <br/>{props.age} | {props.gender}</Card.Text>
            <FontAwesomeIcon icon="far fa-heart" />
            <Button className="mt-auto" variant="primary">Check Me Out!</Button>
            
          </Card.Body>
      </Card>
    );
};

export default PetThumbnail;


