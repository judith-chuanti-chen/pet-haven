import { combineReducers } from 'redux';
import user from './users_reducer';
import filter from './filters_reducer';
//e.g. import favoritePet from './favoritePet_reducer';
const rootReducer = combineReducers({
    user,
    filter
    //favoritePet
});

export default rootReducer;