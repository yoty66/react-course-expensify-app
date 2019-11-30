import {NavLink} from "react-router-dom";
import React from "react";
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';


export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={'/dashboard'} activeClassName={'is-active'} exact={true}> Dashboard </NavLink>
        <NavLink to={'/create'} activeClassName={'is-active'}> Create expense </NavLink>
        <NavLink to={'/help'} activeClassName={'is-active'}> Help </NavLink>
        <button onClick={startLogout}> Logout </button>
    </header>
);

const mapDispatchToProps = ( dispatch ) =>({
  startLogout: ()=> dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(Header);