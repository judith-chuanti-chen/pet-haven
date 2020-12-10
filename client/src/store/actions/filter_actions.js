import {
    SET_TYPE,
    SET_AGE,
    SET_SIZE,
    SET_GENDER,
    SET_DISTANCE,
    SET_LOCATION
} from '../types';

export const setType = (newType) => {
    return {
        type: SET_TYPE,
        payload: newType
    };
};

export const setAge = (newAge) => {
    return {
        type: SET_AGE,
        payload: newAge
    };
};

export const setSize = (newSize) => {
    return {
        type: SET_SIZE,
        payload: newSize
    };
};
    
export const setGender = (newGender) => {
    return {
        type: SET_GENDER,
        payload: newGender
    };
};

export const setDistance = (newDistance) => {
    return {
        type: SET_DISTANCE,
        payload: newDistance
    }
}
export const setLocation = (newLocation) => {
    return {
        type: SET_LOCATION,
        payload: newLocation
    };
};

