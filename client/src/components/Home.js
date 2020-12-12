import React from 'react';
import PetThumbnail from './PetThumbnail';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
const Home = () => {
    return(
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Pet Haven</h1>
                    <p>Find adoptable pets near you!</p>
                </Container>
                </Jumbotron>
            <Container>
                <SearchBar />
            </Container>
        </>
    );
};
export default Home;