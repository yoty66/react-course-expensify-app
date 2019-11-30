import { Router, Route , Switch , Link , NavLink} from 'react-router-dom';
import React from "react";
import ExpenseDashBoardPage from '../components/ExpenseDashBoard'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import LoginPage from '../components/LoginPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from '../routers/PrivateRoute'

export const history = createHistory();

export default ()=> (
    <Router history={history}>
        <div>

            <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/create' component={AddExpensePage}/>
                <PrivateRoute path='/dashboard' component={ExpenseDashBoardPage}/>
                <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route  component={NotFoundPage}/>
                <Route/>
            </Switch>
        </div>
    </Router>
);
