import {createStore,combineReducers} from 'redux';
import todosReducer from '../reducers/todos';
import filtersReducer from '../reducers/filters';

//Store creation

export default ()=>{
  const store = createStore(
    combineReducers({
        todos:todosReducer,
        filters:filtersReducer
    })
  );

    return store;
};

