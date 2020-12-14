import React, { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

const PetContext = createContext([{}, () => {}]); //create a context with a state and setState function

const PetContextProvider = props => {
    const [petState, setPetState] = useState({
        id: 0,
        age: "",
    });
    return (
        <PetContext.Provider value={[petState, setPetState]}>
            {props.children}
        </PetContext.Provider>
    );
};
PetContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { PetContext, PetContextProvider };
