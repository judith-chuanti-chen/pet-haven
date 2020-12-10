import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import pf from "../petfinder";
const Search = () => {
  const history = useHistory();
  const displayAllTypes = () => {
    pf.animalData.types().then((resp) => {
      console.log(resp);
    });
  };
  useEffect(() => {
    displayAllTypes();
  }, []);
  return (
    <>
      <h1>Search Result</h1>
    </>
  );
};

export default Search;
