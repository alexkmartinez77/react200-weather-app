import { combineReducers } from 'redux';
import searchReducer from './Components/SearchBar/searchReducer';

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;
