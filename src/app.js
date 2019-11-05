import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import './styles/styles.scss';
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from "./actions/expenses";
import './firebase/firebase';

const store =configureStore ();


const jsx =
    (
       <Provider store={store}>
            <AppRouter/>
         </Provider>
    )


ReactDOM.render(<p> loading ... </p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=> {
    ReactDOM.render(jsx, document.getElementById('app'));
});
