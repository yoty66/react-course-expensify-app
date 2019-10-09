import {combineReducers, createStore} from "redux";
import expensesReducer from '../reducers/expensesReducers'
import filtersReducer from '../reducers/filtersReducers'


export default () => {
    const store = createStore(combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
   return store;
}
