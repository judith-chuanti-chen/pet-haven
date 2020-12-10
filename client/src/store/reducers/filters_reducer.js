import {
    SET_TYPE,
    SET_AGE,
    SET_SIZE,
    SET_GENDER,
    SET_LOCATION
} from '../types';

const initialState = {
    type: '',
    size: '',
    gender: '',
    age: '',
    distance: '',
    location: ''
}
const filtersReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_TYPE:
            return {...state, type: action.payload}
        case SET_SIZE:
            return {...state, size: action.payload}
        case SET_GENDER:
            return {...state, gender: action.payload}
        case SET_AGE:
            return {...state, age: action.payload}
        case SET_LOCATION:
            return {...state, location: action.payload}
        default:
            return state;
    }
}

export default filtersReducer;