import dataMovies from './homeReducer';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    dataMovies: dataMovies
});

export default allReducers;