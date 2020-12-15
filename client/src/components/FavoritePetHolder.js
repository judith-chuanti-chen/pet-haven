import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PetThumbnail from "./PetThumbnail";
import LoadingThumbnails from "./LoadingThumbnails";
import { Button, Container, Row, Col } from "react-bootstrap";
import pf from "../petfinder";

const FavoritePetHolder = ({ setActive }) => {
  const favPets = useSelector((state) => state.favPets);
  const [results, setResults] = useState([]);


  const getResults = () => {
    let favPetArray = [...favPets];
    let tempRes = [];
    favPetArray.forEach((petid) => {
      pf.animal
        .show(petid)
        .then((resp) => {
          tempRes.push(resp.data.animal);
        })
        .catch(err =>{
          console.log(err);
        })
        .finally(() => {
          setActive([true, false]);
        });
    });
    console.log(tempRes);
    setResults(tempRes);
  };

  useEffect(() => {
    getResults();
    console.log(results);
    console.log(results.length > 0);
  }, [favPets]);

  return (
    <div>
      <Row
        style={{ justifyContent: "center" }}
        className="flex align-content-center"
      >
        {results.length === favPets.size ? (
          results.map((p) => (
            <Col key={p.id} sm="6" md="4">
              <PetThumbnail
                id={p.id}
                image={
                  p.primary_photo_cropped
                    ? p.primary_photo_cropped.full
                    : p.photos[0]
                }
                name={p.name}
                age={p.age}
                gender={p.gender}
                isLiked={favPets.has(p.id)}
                p_info={p}
              />
            </Col>
          ))
        ) : (
          <h3>You have no favorite pets</h3>
        )}
      </Row>
    </div>
  );
};

export default FavoritePetHolder;
