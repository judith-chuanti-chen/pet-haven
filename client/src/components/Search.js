import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import pf from "../petfinder";
import PetThumbnail from "./PetThumbnail";
import SearchBar from './SearchBar';
import {Container, Row, Col} from 'react-bootstrap';

const Search = ({location}) => {
  const history = useHistory();
  const [results, setResults] = useState([]);
  const displaySearchResults = () => {
    const params = new URLSearchParams(location.search);
    console.log(parseInt(params.get("distance")));
    pf.animal.search({
      type: params.get("type"),
      age: params.get("age") === "all" ? null : params.get("age"),
      size: params.get("size") === "all" ? null : params.get("size"),
      gender: params.get("gender") === "all" ? null : params.get("gender"),
      location: params.get("location") === "anywhere" ? null : params.get("location"), 
      distance: parseInt(params.get("distance")) ? parseInt(params.get("distance")) : null,
      page: 1,
      limit: 20,

    }).then(resp => {
      // Do something with resp.data.animals
      console.log(resp.data.animals);
      setResults(resp.data.animals);
    });
  };
  useEffect(() => {
    displaySearchResults();
  }, [location.search]);
  return (
    <>
      <Container>
        <Row><SearchBar /></Row>
        <Row className="flex align-content-center">
            {results.map(p => 
              <Col key={p.id} sm="6" md="4">
                <PetThumbnail 
                  image={p.primary_photo_cropped ? p.primary_photo_cropped.full : p.photos[0]}
                  name={p.name}
                  age={p.age}
                  gender={p.gender}
                  />
              </Col>
              )}
        </Row>
      </Container>
     
    </>
  );
};

export default Search;
