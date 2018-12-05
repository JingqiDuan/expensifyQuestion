import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore';
import {addTodos} from './actions/todos';
import {setTextFilter} from './actions/filters';
import getVisibleTodos from './selectors/todos';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addTodos({eventName:'pay water bill'}));
store.dispatch(addTodos({eventName:'pay gas bill'}));
store.dispatch(setTextFilter('water'));

setTimeout(()=>{
    store.dispatch(setTextFilter('rent'));
},3000)

const state = store.getState();
const VisibleTodos = getVisibleTodos(state.todos,state.filters);
console.log(VisibleTodos);

//console.log(store.getState());
const jsx = (
    <Provider store = {store}>
      <AppRouter />
    </Provider>  
);

ReactDOM.render(jsx, document.getElementById('app'));
