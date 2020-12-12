import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button, Row, Col, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const PetThumbnail = props => {
    return(
      <Card className="m-3 shadow" style={{ width: '27rem', height: '29em', borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}}>
        <Card.Img variant="top" style={{height: '18em', objectFit: 'cover', borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}} src={props.image} />
          <Card.Body className="d-flex flex-column">
            <Card.Text className="text-center">
              <b>{props.name}</b>
              <br/>{props.age} | {props.gender}
            </Card.Text>
            <ButtonGroup className="mt-auto">
              <Button variant="light"><FontAwesomeIcon icon={faHeart} size="lg"/></Button>
              <Button  variant="primary">Check Me Out!</Button>
            </ButtonGroup>
            {/* <Row>
              <Col sm="4"> <FontAwesomeIcon icon={faHeart} size="lg"/> </Col>
              <Col sm="8"><span><Button className="mt-auto" variant="primary">Check Me Out!</Button></span></Col>
            </Row> */}
          </Card.Body>
      </Card>
    );
};

export default PetThumbnail;


