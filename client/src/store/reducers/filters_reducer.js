import {
    SET_TYPE,
    SET_AGE,
    SET_SIZE,
    SET_GENDER,
    SET_LOCATION,
    SET_DISTANCE
} from '../types';

const initialState = {
    type: '0',
    size: 'all',
    gender: 'all',
    age: 'all',
    distance: 'anywhere',
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
        case SET_DISTANCE:
            return {...state, distance: action.payload}
        default:
            return state;
    }
}

export default filtersReducer;