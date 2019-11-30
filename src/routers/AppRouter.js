import { Router, Route , Switch , Link , NavLink} from 'react-router-dom';
import React from "react";
import ExpenseDashBoardPage from '../components/ExpenseDashBoard'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import LoginPage from '../components/LoginPage'
import NotFoundPage from '../components/NotFoundPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'

export const history = createHistory();

export default ()=> (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/create' component={AddExpensePage}/>
                <PrivateRoute path='/dashboard' component={ExpenseDashBoardPage}/>
                <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
                <Route  component={NotFoundPage}/>
                <Route/>
            </Switch>
        </div>
    </Router>
);
