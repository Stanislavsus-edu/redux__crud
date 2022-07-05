import {createStore, combineReducers} from 'redux'
import listReducer from '../reducers/listReducer';
import formReducer from '../reducers/formReducer';
import filterReducer from '../reducers/filterReducer';

const reducer = combineReducers({
  List: listReducer,
  Form: formReducer,
  Filter: filterReducer,
});

const store = createStore(reducer)

export {store}