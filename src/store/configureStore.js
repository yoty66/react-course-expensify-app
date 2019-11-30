import {combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expensesReducers';
import filtersReducer from '../reducers/filtersReducers';
import authReducer from '../reducers/authReducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose ;
export default () => {
    const store = createStore(combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware( thunk )));
   return store;
}
