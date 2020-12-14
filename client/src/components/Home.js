import React, { useEffect } from 'react';
import PetThumbnail from './PetThumbnail';
import SearchBar from './SearchBar';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap';

const Home = (props) => {
    return(
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Pet Haven</h1>
                    <p>Find adoptable pets near you!</p>
                </Container>
            </Jumbotron>
            <Row >
                <Col className="d-flex justify-content-center">
                    <SearchBar />
                </Col>
            </Row>
        </>
    );
};
export default Home;