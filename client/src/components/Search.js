import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import PetThumbnail from "./PetThumbnail";
import LoadingThumbnails from './LoadingThumbnails';
import SearchBar from './SearchBar';
import {Container, Row, Col} from 'react-bootstrap';
import Paginations from "./Pagination";
import pf from "../petfinder";


const Search = ({location, favPets}) => {
  const history = useHistory();
  const filter = useSelector(state => state.filter);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  //callback - setTotalPages
  const getSearchResults = (callback) => {
    setLoading(true);
    const params = new URLSearchParams(location.search);
    pf.animal.search({
      type: params.get("type"),
      age: params.get("age") === "all" ? null : params.get("age"),
      size: params.get("size") === "all" ? null : params.get("size"),
      gender: params.get("gender") === "all" ? null : params.get("gender"),
      location: params.get("location") === "anywhere" ? null : params.get("location"), 
      distance: parseInt(params.get("distance")) ? parseInt(params.get("distance")) : null,
      page: page,
      limit: 24,

    }).then(resp => {
      // Do something with resp.data.animals
      setResults(resp.data.animals);
      if(callback){
        callback(resp.data.pagination.total_pages);
      }
    }).catch(err => {
      console.log(err)
      setResults([]);
    }).finally(() => {
        setLoading(false);
    });
  };


  useEffect(() => {
    getSearchResults();
    // console.log("new page");
  }, [page]);

  useEffect(() => {
    setPage(1);
    getSearchResults(setTotalPage);
  }, [location.search])


  return (
    <>
    <Col><SearchBar /> </Col>
      
      <Container>
        <Row className="flex align-content-center">
            {!loading ? (results.length > 0 ? results.map(p => 
              <Col key={p.id} sm="6" md="4">
                  <PetThumbnail 
                    id={p.id}
                    image={p.primary_photo_cropped ? p.primary_photo_cropped.full : p.photos[0]}
                    name={p.name}
                    age={p.age}
                    gender={p.gender}
                    isLiked={favPets.has(p.id)}
                    p_info = {p}
                    />
              </Col>
              ):  <h3>Sorry, no results could be found :/</h3> ) : <LoadingThumbnails count={24}/>}
        </Row>
        <Row className="justify-content-center">
          <Paginations handleChange={setPage} count={totalPage} page={page}/>
        </Row>
        
      </Container>
    </>
  );
};

export default Search;
