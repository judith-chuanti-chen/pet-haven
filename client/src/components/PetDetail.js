import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux' 
import pf from "../petfinder";
import SearchBar from './SearchBar';
import { favorite, unfavorite } from '../utils/manageFavoritePet';
import {Jumbotron, Container, Card, Button, Row, Col, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faMapMarker, faPhoneSquare } from "@fortawesome/free-solid-svg-icons"


const PetDetail = ({user, location, favPets}) => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    const params = new URLSearchParams(location.search);
    const [like, setLike] = useState(favPets.has(parseInt(params.get("id"))));
    const [petInfo, setPetInfo] = useState({id: params.get("id"),
                                            name: params.get("name"),
                                            gender: params.get("gender"),
                                            age: params.get("age"),
                                            image: params.get("image"),
                                            characteristics: ""});
    const getSingleResult = () => {
        setLoading(true);
        console.log("my id", petInfo.id);
        pf.animal.show(petInfo.id).then(resp => {
            // Do something with resp.data.animals
            setResult(resp.data.animal);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false);
        });
    };

    const handleName = () => {
        if (petInfo.name !== undefined && petInfo.name.includes("-")) {
            var name_info = petInfo.name.split('-');
            setPetInfo({...petInfo, name: name_info[0].trim(), characteristics: name_info[1].trim()});
        }
        // console.log(name_info, petInfo.name);
    };

    const toggleLike = () => {
      if(like){
        unfavorite(user.userData._id, petInfo.id);
        setLike(false);
      }else{
        favorite(user.userData._id, petInfo.id);
        setLike(true);
      }
    };

    useEffect(() => {
        getSingleResult();
        handleName();
    }, []);
   
    const print = () => {
        console.log(result)
        console.log(petInfo.name, petInfo.characteristics)
    };

    return (
        <>
            <Container>
                {!loading ? <>
                <Row><SearchBar /></Row>
                <Row>
                    <Card.Img variant="top" style={{height: '30em', objectFit: 'cover', borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}} src={petInfo.image} />
                </Row>
                <Card className="m-3 shadow">
                    <Row>
                        <Jumbotron className="text-center" style={{width: "70em", background: "white"}}>    
                            <h1 onClick={print}>
                                {petInfo.name}
                            </h1>
                            <h5>
                                <span>{result.contact.address.city}, {result.contact.address.state}</span>
                            </h5>
                            <hr></hr>
                            <p>{petInfo.age} &bull; {petInfo.gender} &bull; {result.size} &bull; {result.color}</p>
                            <Button className="btn btn-info" variant="white" onClick={toggleLike}>
                                    <FontAwesomeIcon icon={like ? solidHeart : regularHeart } size="lg"/> Favorite {petInfo.name}
                            </Button>
                        </Jumbotron>
                    </Row>
                </Card>
                <Row style={{textAlign:'center', justifyContent: "center"}}>
                    <div class="col-md">
                    <Card className="m-3 shadow" style={{ borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}}>
                        <Col style={{textAlign: 'center'}}>
                            <h1>About</h1><hr/>
                        </Col>
                        <Card.Body className="d-flex flex-column">
                            <div style={{textAlign: "left", padding: "5px"}}>
                                <Card.Text>
                                    {(petInfo.characteristics !== "") ? (
                                    <div><b>Characteristics</b><br/>{petInfo.characteristics}</div> 
                                    ): (<div></div>)}
                                </Card.Text>
                                <Card.Text>
                                    <b>Description</b> 
                                    <br/>{result.description}
                                </Card.Text>
                                <Card.Text>
                                    <b>Breeds</b> 
                                    <br/>{result.breeds.primary}
                                </Card.Text>
                                <Card.Text>
                                    <b>Color</b> 
                                    <br/>{result.colors.primary}
                                </Card.Text>
                                <Card.Text>
                                    <b>Age</b> 
                                    <br/>{result.age}
                                </Card.Text>
                                <Card.Text>
                                    <b>Status</b> 
                                    <br/>{result.status}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                    <div class="col-">
                        <Card className="m-3 shadow" style={{ borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}}>
                            <Col style={{textAlign: 'center'}}>
                                <h1>Contact</h1>
                            </Col>
                            <Card.Body className="d-flex flex-column">
                                <Card.Text>
                                    <div style={{textAlign: "left"}}>
                                        <b><FontAwesomeIcon icon={faMapMarker} size="lg"/>&nbsp;&nbsp;Location Address</b> 
                                        <br/>{result.contact.address.city}, {result.contact.address.state}<hr/>
                                        <b><FontAwesomeIcon icon={faEnvelope} size="lg"/>&nbsp;&nbsp;Email</b> 
                                        <br/>{result.contact.email}<hr/>
                                        <b><FontAwesomeIcon icon={faPhoneSquare} size="lg"/>&nbsp;&nbsp;Phone</b> 
                                        <br/>{result.contact.phone}<hr/>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row></> : <>loading</>}
            </Container>
        </>
    );
};

export default PetDetail;