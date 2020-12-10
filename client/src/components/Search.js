import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import pf from "../petfinder";
import PetThumbnail from "./PetThumbnail";
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
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
      limit: 100,
    }).then(resp => {
      // Do something with resp.data.animals
      console.log(resp.data.animals);
      setResults(resp.data.animals);
    });
  };
  useEffect(() => {
    displaySearchResults();
  });
  return (
    <>
      <Container>
        <SearchBar />
        <div className="row flex align-content-center">
          {results.map(p => <PetThumbnail id={p.id} image={p.primary_photo_cropped.full}/>)}
        </div>
       
      </Container>
     
    </>
  );
};

export default Search;
