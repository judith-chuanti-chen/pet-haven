import { ADD_FAV, DELETE_FAV } from '../types';

export const addFavPet = (petId) => {
    return {
        type: ADD_FAV,
        payload: petId
    }
};

export const deleteFavPet = (petId) => {
    return {
        type: DELETE_FAV,
        payload: petId
    }
};