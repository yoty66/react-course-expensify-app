import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import './styles/styles.scss';
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import {addExpense} from "./actions/expenses";

const store =configureStore ();
// console.log(store.getState());

// store.dispatch(addExpense({description: 'Water bill' , createdAt: 3 , amount: 300 }));
// store.dispatch(addExpense({description: 'REnt' , createdAt: 3 , amount: 3000000 }));



const jsx =
    (
       <Provider store={store}>
            <AppRouter/>
         </Provider>
    )


ReactDOM.render(jsx, document.getElementById('app'));
