import React, { useEffect } from 'react';
import PetThumbnail from './PetThumbnail';
import SearchBar from './SearchBar';
import { getAllFavPets } from '../utils/manageFavoritePet';
import { useDispatch } from 'react-redux';
import { addFavPet } from '../store/actions/favPet_actions';
import {Container, Jumbotron, Row, Col} from 'react-bootstrap';
import logo from '../dog_cat_logo.png';

let homeStyle = {fontFamily: "Montserrat, sans-serif"};

const Home = ({user, favPets}) => {
    const dispatch = useDispatch();
    const populateInitialFavPets = () => {
    // Populate initial favPets in the app if user is logged in
        if(!user.auth) return;
        if(favPets.size === 0){
            getAllFavPets(user.userData._id, (petIds) => {
                petIds.forEach(petId => {
                    dispatch(addFavPet(petId));
                });   
            });     
        }
        console.log("Populated initial favPets: ");
        console.log(favPets);
    }

    useEffect(() => {
        populateInitialFavPets();
    }, [user.auth]);
    return(
        <>
            <Jumbotron fluid>
                <Container >
                    <div className="home" style={homeStyle}>
                        <h1>Pet Haven</h1>
                        <p>Find adoptable pets near you!</p>
                    </div>
                </Container>
            </Jumbotron>
            <Row >
                <Col className="d-flex justify-content-center">
                    <SearchBar />
                </Col>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center">
                    <img src={logo} alt="logo"/>
                </Col>
            </Row>
        </>
    );
};
export default Home;