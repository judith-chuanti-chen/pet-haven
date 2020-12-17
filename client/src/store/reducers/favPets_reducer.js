import { ADD_FAV, DELETE_FAV } from '../types';

const favPetsReducer = (state=new Set(), action) => {
    const favPets = new Set([...state]);
    switch(action.type){
        case ADD_FAV:
            favPets.add(action.payload);
            // console.log(favPets);
            return favPets;
        case DELETE_FAV:
            favPets.delete(action.payload);
            // console.log(favPets);
            return favPets;
        default:
            return state;
    }
  
};

export default favPetsReducer;