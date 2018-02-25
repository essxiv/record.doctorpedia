import { combineReducers, createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    routing: routerReducer
});

export default rootReducer;
