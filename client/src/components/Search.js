import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import pf from "../petfinder";
import { useSelector } from 'react-redux'
import PetThumbnail from "./PetThumbnail";
import SearchBar from './SearchBar';
import {Container, Row, Col} from 'react-bootstrap';
import Paginations from "./Pagination";

const Search = ({location, favPets}) => {
  const history = useHistory();
  const filter = useSelector(state => state.filter);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  
  //callback - setTotalPages
  const getSearchResults = (callback) => {
    pf.animal.search({
      type: filter.type,
      age: filter.age === "all" ? null : filter.age,
      size: filter.size === "all" ? null : filter.size,
      gender: filter.gender === "all" ? null : filter.gender,
      location: filter.location === "anywhere" ? null : filter.location, 
      distance: parseInt(filter.distance) ? parseInt(filter.distance) : null,
      page: page,
      limit: 24,

    }).then(resp => {
      // Do something with resp.data.animals
      setResults(resp.data.animals);
      console.log(resp.data.pagination.total_pages);
      if(callback){
        callback(resp.data.pagination.total_pages);
      }
    }).catch(err => {
      console.log(err)
    });
  };


  useEffect(() => {
    getSearchResults();
  }, [page]);

  useEffect(() => {
    setPage(1);
    getSearchResults(setTotalPage);
  }, [location.search])


  return (
    <>
      <Container>
        <Row><SearchBar /></Row>
        <Row className="flex align-content-center">
            {results.map(p => 
              <Col key={p.id} sm="6" md="4">
                <PetThumbnail 
                  id={p.id}
                  image={p.primary_photo_cropped ? p.primary_photo_cropped.full : p.photos[0]}
                  name={p.name}
                  age={p.age}
                  gender={p.gender}
                  isLiked={favPets.has(p.id)}
                  />
              </Col>
              )}
        </Row>
        <Row className="justify-content-center">
          <Paginations handleChange={setPage} count={totalPage} page={page}/>
        </Row>
        
      </Container>
    </>
  );
};

export default Search;
